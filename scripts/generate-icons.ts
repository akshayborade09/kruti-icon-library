import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Icon size directories
const ICON_SIZES = ['16', '20', '24'];
const ICONS_DIR = path.join(__dirname, '../src/icons');
const COMPONENTS_DIR = path.join(__dirname, '../src/components');

// Function to convert filename to component name
function filenameToComponentName(filename: string): string {
  // Remove .svg extension
  const nameWithoutExt = filename.replace('.svg', '');
  
  // Take only the first part before comma (main name)
  const mainName = nameWithoutExt.split(',')[0].trim();
  
  // Convert to PascalCase
  const pascalCase = mainName
    .split(/[\s-_]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  
  return `Icon${pascalCase}`;
}

// Function to create React component from SVG
function createReactComponent(svgContent: string, componentName: string, size: string): string {
  // Extract SVG attributes and content
  const svgMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!svgMatch) {
    throw new Error('Invalid SVG content');
  }

  let svgInnerContent = svgMatch[1].trim();
  
  // Clean up SVG content - remove hardcoded styling that conflicts with dynamic props
  svgInnerContent = svgInnerContent
    .replace(/stroke="[^"]*"/g, '') // Remove hardcoded stroke color
    .replace(/stroke-width="[^"]*"/g, '') // Remove hardcoded stroke width
    .replace(/stroke-linecap="[^"]*"/g, '') // Remove hardcoded stroke linecap
    .replace(/stroke-linejoin="[^"]*"/g, '') // Remove hardcoded stroke linejoin
    .replace(/fill="[^"]*"/g, '') // Remove hardcoded fill
    .trim();
  
  // Extract viewBox from original SVG
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : `0 0 ${size} ${size}`;

  return `import React from 'react';
import { IconProps } from '../types';

const ${componentName}: React.FC<IconProps> = ({ 
  size = ${size}, 
  color = "currentColor", 
  ariaHidden = true,
  title,
  ...props 
}) => {
  const svgProps = {
    ...props,
    width: size,
    height: size,
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    'aria-hidden': ariaHidden,
    role: ariaHidden ? undefined : 'img'
  };

  return (
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">
      {title && !ariaHidden && <title>{title}</title>}
      ${svgInnerContent}
    </svg>
  );
};

${componentName}.displayName = '${componentName}';

export default ${componentName};
`;
}

// Function to generate icon components
async function generateIconComponents() {
  console.log('🎨 Generating React icon components...\n');
  
  // Create components directory if it doesn't exist
  if (!fs.existsSync(COMPONENTS_DIR)) {
    fs.mkdirSync(COMPONENTS_DIR, { recursive: true });
  }

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
        
        // Generate component name
        let componentName = filenameToComponentName(file);
        
        // Extract aliases from filename (parts after comma)
        const nameWithoutExt = file.replace('.svg', '');
        const aliases = nameWithoutExt.includes(',') 
          ? nameWithoutExt.split(',').slice(1).map(alias => alias.trim())
          : [];

        // Make component name unique by adding size suffix and handling duplicates
        const baseComponentName = componentName;
        componentName = size === '24' ? componentName : `${componentName}${size}`;
        
        // Handle duplicates by adding a counter
        let finalComponentName = componentName;
        let counter = 1;
        while (usedNames.has(finalComponentName)) {
          finalComponentName = `${componentName}${counter}`;
          counter++;
        }
        usedNames.add(finalComponentName);

        // Create React component
        const componentCode = createReactComponent(svgContent, finalComponentName, size);
        
        // Write component file
        const componentFileName = `${finalComponentName}.tsx`;
        const componentPath = path.join(COMPONENTS_DIR, componentFileName);
        
        fs.writeFileSync(componentPath, componentCode);
        
        // Store icon info
        allIcons.push({
          name: finalComponentName,
          component: finalComponentName,
          aliases,
          size
        });

        console.log(`✅ Generated: ${finalComponentName} (${size}px)`);
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error);
      }
    }
  }

  // Generate index file with all exports
  const indexContent = generateIndexFile(allIcons);
  fs.writeFileSync(path.join(COMPONENTS_DIR, 'index.ts'), indexContent);
  
  // Update main index.ts
  const mainIndexContent = `// Kruti Icon Library
// React icon components with TypeScript support

export * from './components';
export * from './types';
export { default as IconProps } from './types';
`;
  
  fs.writeFileSync(path.join(__dirname, '../src/index.ts'), mainIndexContent);

  console.log(`\n🎉 Successfully generated ${allIcons.length} icon components!`);
  console.log(`📦 Components exported from: src/components/index.ts`);
  console.log(`🚀 Ready to use: import { IconArrowLeft, IconSearch } from 'kruti-icon-library'`);
}

// Function to generate index file with exports
function generateIndexFile(icons: Array<{ name: string; component: string; aliases: string[]; size: string }>): string {
  const imports = icons.map(icon => 
    `export { default as ${icon.component} } from './${icon.component}';`
  ).join('\n');

  const iconList = icons.map(icon => `//   ${icon.component} - ${icon.aliases.join(', ')}`).join('\n');

  return `// Auto-generated icon exports
// This file is automatically generated by scripts/generate-icons.ts
// Do not edit manually

${imports}

// Available Icons:
${iconList}

// Usage:
// import { IconArrowLeft, IconSearch, IconSettings } from 'kruti-icon-library';
`;
}

// Run the generator
generateIconComponents().catch(console.error); 