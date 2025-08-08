import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Icon size directories (only generating 24px, size controlled via props)
const ICON_SIZES = ['24'];
const ICONS_DIR = path.join(__dirname, '../src/icons');
const COMPONENTS_DIR = path.join(__dirname, '../src/components');

// Function to convert filename to component name
function filenameToComponentName(filename: string): string {
  // Remove .svg extension
  const nameWithoutExt = filename.replace('.svg', '');
  
  // Take only the first part before comma (main name)
  const mainName = nameWithoutExt.split(',')[0].trim();
  
  // Convert to PascalCase for component names
  const pascalCase = mainName
    .split(/[\s-_]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  
  return `Icon${pascalCase}`;
}

// Function to convert filename to icon name
function filenameToIconName(filename: string): string {
  // Remove .svg extension
  const nameWithoutExt = filename.replace('.svg', '');
  
  // Take only the first part before comma (main name)
  const mainName = nameWithoutExt.split(',')[0].trim();
  
  // Convert to kebab-case for icon names
  const kebabCase = mainName
    .split(/[\s-_]+/)
    .map(word => word.toLowerCase())
    .join('-');
  
  return kebabCase;
}

// Function to extract SVG content while preserving all attributes
function extractSVGContent(svgContent: string): { paths: string[], viewBox: string } {
  // Extract viewBox from original SVG
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  // Extract all path elements and their attributes
  const pathMatches = svgContent.match(/<path[^>]*\/?>/g) || [];
  const paths: string[] = [];

  for (const pathMatch of pathMatches) {
    // Keep the original path element as-is to preserve all attributes
    paths.push(pathMatch);
  }

  return { paths, viewBox };
}

// Function to generate SVG sprite sheet
function generateSpriteSheet(svgFiles: Array<{ name: string; content: string; aliases: string[] }>): string {
  let spriteContent = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n  <defs>\n`;
  
  for (const file of svgFiles) {
    const { paths, viewBox } = extractSVGContent(file.content);
    const iconName = filenameToIconName(file.name);
    
    spriteContent += `    <symbol id="icon-${iconName}" viewBox="${viewBox}">\n`;
    for (const path of paths) {
      spriteContent += `      ${path}\n`;
    }
    spriteContent += `    </symbol>\n`;
  }
  
  spriteContent += `  </defs>\n</svg>`;
  
  return spriteContent;
}

// Function to generate React component that uses the sprite sheet
function generateIconComponent(icons: Array<{ name: string; component: string; aliases: string[]; size: string }>): string {
  const baseComponent = `import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <use href={\`#icon-\${name}\`} />
  </svg>
);

// Individual icon components for convenience`;

  const individualComponents = icons.map(icon => {
    const iconName = icon.name;
    return `export const ${icon.component}: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="${iconName}" {...props} />
);`;
  }).join('\n\n');

  return `${baseComponent}

${individualComponents}
`;
}

// Function to generate icon components
async function generateIconComponents() {
  console.log('🎨 Generating SVG sprite sheet and React components...\n');
  
  // Create components directory if it doesn't exist
  if (!fs.existsSync(COMPONENTS_DIR)) {
    fs.mkdirSync(COMPONENTS_DIR, { recursive: true });
  }

  const svgFiles: Array<{ name: string; content: string; aliases: string[] }> = [];
  const allIcons: Array<{ name: string; component: string; aliases: string[]; size: string }> = [];
  const usedNames = new Set<string>(); // Track used component names to avoid duplicates

  // Process each size directory
  for (const size of ICON_SIZES) {
    const sizeDir = path.join(ICONS_DIR, size);
    
    if (!fs.existsSync(sizeDir)) {
      console.log(`⚠️ Size directory ${size} not found, skipping...`);
      continue;
    }

    const files = fs.readdirSync(sizeDir).filter(file => file.endsWith('.svg'));
    console.log(`📁 Processing ${files.length} icons from ${size}px folder...`);

    for (const file of files) {
      try {
        const filePath = path.join(sizeDir, file);
        const svgContent = fs.readFileSync(filePath, 'utf-8');
        
        // Generate icon name
        const iconName = filenameToIconName(file);
        
        // Extract aliases from filename (parts after comma)
        const nameWithoutExt = file.replace('.svg', '');
        const aliases = nameWithoutExt.includes(',') 
          ? nameWithoutExt.split(',').slice(1).map(alias => alias.trim())
          : [];

        // Store SVG content for sprite sheet
        svgFiles.push({
          name: file,
          content: svgContent,
          aliases
        });

        // Generate component name and handle duplicates
        let componentName = filenameToComponentName(file);
        let counter = 1;
        while (usedNames.has(componentName)) {
          componentName = `${filenameToComponentName(file)}${counter}`;
          counter++;
        }
        usedNames.add(componentName);

        // Store icon info
        allIcons.push({
          name: iconName,
          component: componentName,
          aliases,
          size
        });

        console.log(`✅ Processed: ${iconName} -> ${componentName}`);
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error);
      }
    }
  }

  // Generate SVG sprite sheet
  const spriteSheet = generateSpriteSheet(svgFiles);
  fs.writeFileSync(path.join(__dirname, '../public/sprite.svg'), spriteSheet);
  console.log(`✅ Generated sprite sheet: public/sprite.svg`);

  // Generate React component
  const componentCode = generateIconComponent(allIcons);
  fs.writeFileSync(path.join(COMPONENTS_DIR, 'Icon.tsx'), componentCode);
  console.log(`✅ Generated React component: src/components/Icon.tsx`);

  // Generate index file with all exports
  const indexContent = generateIndexFile(allIcons);
  fs.writeFileSync(path.join(COMPONENTS_DIR, 'index.ts'), indexContent);
  
  // Update main index.ts
  const mainIndexContent = `// Kruti Icon Library
// React icon components with TypeScript support

export * from './components';
export * from './types';
`;
  
  fs.writeFileSync(path.join(__dirname, '../src/index.ts'), mainIndexContent);

  console.log(`\n🎉 Successfully generated sprite sheet with ${allIcons.length} icons!`);
  console.log(`📦 Components exported from: src/components/index.ts`);
  console.log(`🎨 Sprite sheet available at: public/sprite.svg`);
  console.log(`🚀 Ready to use: import { Icon, IconArrowLeft } from 'kruti-icon-library'`);
  console.log(`📏 Control size with props: <Icon name="arrow-left" size={16} /> <IconArrowLeft size={20} />`);
}

// Function to generate index file with exports
function generateIndexFile(icons: Array<{ name: string; component: string; aliases: string[]; size: string }>): string {
  const imports = [
    `export { Icon } from './Icon';`,
    ...icons.map(icon => `export { ${icon.component} } from './Icon';`)
  ].join('\n');

  const iconList = icons.map(icon => `//   ${icon.component} - ${icon.aliases.join(', ')}`).join('\n');

  return `// Auto-generated icon exports
// This file is automatically generated by scripts/generate-icons.ts
// Do not edit manually

${imports}

// Available Icons:
${iconList}

// Usage:
// import { Icon, IconArrowLeft, IconMagnifyingGlass2 } from 'kruti-icon-library';
// Control size: <Icon name="arrow-left" size={16} /> <IconArrowLeft size={20} /> <IconArrowLeft size={32} />
`;
}

// Run the generator
generateIconComponents().catch(console.error); 