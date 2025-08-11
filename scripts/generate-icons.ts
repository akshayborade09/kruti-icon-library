import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { optimize } from 'svgo';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Icon size directories (only generating 24px, size controlled via props)
const ICON_SIZES = ['24'];
const ICONS_DIR = path.join(__dirname, '../src/icons');
const COMPONENTS_DIR = path.join(__dirname, '../src/components');

// SVGO configuration to preserve stroke width
const svgoConfig = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeUnknownsAndDefaults: {
            keepStrokeAndFill: true
          }
        }
      }
    },
    { name: 'convertPathData', active: false } // prevent coordinate scaling
  ]
};

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

// Function to extract SVG content while preserving original attributes
function extractSVGContent(svgContent: string): { paths: string[], viewBox: string } {
  // Optimize SVG with SVGO while preserving stroke attributes
  const optimizedSvg = optimize(svgContent, svgoConfig);
  
  // Extract viewBox from optimized SVG
  const viewBoxMatch = optimizedSvg.data.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  // Extract all path elements and their attributes
  const pathMatches = optimizedSvg.data.match(/<path[^>]*\/?>/g) || [];
  const paths: string[] = [];

  for (const pathMatch of pathMatches) {
    // Extract the path data and other attributes
    const pathDataMatch = pathMatch.match(/d="([^"]+)"/);
    const strokeWidthMatch = pathMatch.match(/stroke-width="([^"]+)"/);
    const strokeLinecapMatch = pathMatch.match(/stroke-linecap="([^"]+)"/);
    const strokeLinejoinMatch = pathMatch.match(/stroke-linejoin="([^"]+)"/);
    
    if (pathDataMatch) {
      let pathElement = `<path d="${pathDataMatch[1]}"`;
      
      // Preserve original stroke attributes if they exist
      if (strokeWidthMatch) {
        pathElement += ` strokeWidth="${strokeWidthMatch[1]}"`;
      }
      if (strokeLinecapMatch) {
        pathElement += ` strokeLinecap="${strokeLinecapMatch[1]}"`;
      }
      if (strokeLinejoinMatch) {
        pathElement += ` strokeLinejoin="${strokeLinejoinMatch[1]}"`;
      }
      
      pathElement += ' />';
      paths.push(pathElement);
    }
  }

  return { paths, viewBox };
}

// Function to create React component from SVG
function createReactComponent(svgContent: string, componentName: string): string {
  const { paths, viewBox } = extractSVGContent(svgContent);
  
  const pathsContent = paths.join('\n    ');

  return `import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const ${componentName}: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="${viewBox}"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    ${pathsContent}
  </svg>
);
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

        // Handle duplicates by adding a counter
        let finalComponentName = componentName;
        let counter = 1;
        while (usedNames.has(finalComponentName)) {
          finalComponentName = `${componentName}${counter}`;
          counter++;
        }
        usedNames.add(finalComponentName);

        // Create React component
        const componentCode = createReactComponent(svgContent, finalComponentName);
        
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

        console.log(`✅ Generated: ${finalComponentName}`);
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
`;
  
  fs.writeFileSync(path.join(__dirname, '../src/index.ts'), mainIndexContent);

  console.log(`\n🎉 Successfully generated ${allIcons.length} icon components!`);
  console.log(`📦 Components exported from: src/components/index.ts`);
  console.log(`🚀 Ready to use: import { IconArrowLeft, IconMagnifyingGlass2 } from 'kruti-icon-library'`);
  console.log(`📏 Control size with props: <IconArrowLeft size={16} /> <IconArrowLeft size={20} /> <IconArrowLeft size={32} />`);
}

// Function to generate index file with exports
function generateIndexFile(icons: Array<{ name: string; component: string; aliases: string[]; size: string }>): string {
  const imports = icons.map(icon => 
    `export { ${icon.component} } from './${icon.component}';`
  ).join('\n');

  const iconList = icons.map(icon => `//   ${icon.component} - ${icon.aliases.join(', ')}`).join('\n');

  return `// Auto-generated icon exports
// This file is automatically generated by scripts/generate-icons.ts
// Do not edit manually

${imports}

// Available Icons:
${iconList}

// Usage:
// import { IconArrowLeft, IconMagnifyingGlass2, IconSettingsGear1 } from 'kruti-icon-library';
// Control size: <IconArrowLeft size={16} /> <IconArrowLeft size={20} /> <IconArrowLeft size={32} />
`;
}

// Run the generator
generateIconComponents().catch(console.error); 