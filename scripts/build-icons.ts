import fs from 'fs';
import path from 'path';
import { transform } from '@svgr/core';

const iconsBaseDir = path.join(__dirname, '../src/icons');
const componentsDir = path.join(__dirname, '../src/components');
const sizes = [16, 20, 24];

// Ensure components directory exists
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

async function buildIcons() {
  const exports: string[] = [];
  const iconMap: { [key: string]: { [size: number]: string } } = {};
  
  // First pass: collect all SVG content for each icon at each size
  for (const size of sizes) {
    const sizeDir = path.join(iconsBaseDir, size.toString());
    
    if (!fs.existsSync(sizeDir)) {
      console.log(`⚠️  Directory ${sizeDir} not found, skipping...`);
      continue;
    }
    
    const svgFiles = fs.readdirSync(sizeDir).filter(file => file.endsWith('.svg'));
    
    for (const file of svgFiles) {
      const svgPath = path.join(sizeDir, file);
      const svgContent = fs.readFileSync(svgPath, 'utf8');
      const baseName = file.replace('.svg', '');
      
      if (!iconMap[baseName]) {
        iconMap[baseName] = {};
      }
      
      iconMap[baseName][size] = svgContent;
    }
  }
  
  // Second pass: generate components
  for (const [baseName, sizeMap] of Object.entries(iconMap)) {
    const componentName = 'Icon' + baseName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    
    try {
      // Use 24px as default, fallback to available sizes
      const defaultSize = sizeMap[24] || sizeMap[20] || sizeMap[16];
      const defaultSizeNum = sizeMap[24] ? 24 : sizeMap[20] ? 20 : 16;
      
      const jsxComponent = await transform(
        defaultSize,
        {
          plugins: ['@svgr/plugin-jsx'],
          typescript: true,
          template: (variables: any, { tpl }: any) => {
            return tpl`
import React from 'react';
import { IconProps } from '../types';

const %%componentName%%: React.FC<IconProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ariaHidden = true,
  title,
  ...props 
}) => {
  const svgProps = {
    ...props,
    width: size,
    height: size,
    fill: color,
    'aria-hidden': ariaHidden,
    role: ariaHidden ? undefined : 'img'
  };

  return (
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${defaultSizeNum} ${defaultSizeNum}">
      {title && !ariaHidden && <title>{title}</title>}
      %%jsx%%
    </svg>
  );
};

%%componentName%%.displayName = '%%componentName%%';

export default %%componentName%%;
`.replace(/%%componentName%%/g, variables.componentName).replace(/%%jsx%%/g, variables.jsx);
          },
          replaceAttrValues: {
            '#000': '{color}',
            '#000000': '{color}',
            'black': '{color}'
          }
        },
        { componentName }
      );
      
      const componentPath = path.join(componentsDir, `${componentName}.tsx`);
      fs.writeFileSync(componentPath, jsxComponent);
      
      exports.push(`export { default as ${componentName} } from './components/${componentName}';`);
      console.log(`✓ Generated: ${componentName}`);
    } catch (error) {
      console.error(`✗ Error processing ${baseName}:`, error);
    }
  }

  // Generate main index file
  const indexContent = [
    `export * from './types';`,
    ...exports
  ].join('\n');
  
  fs.writeFileSync(path.join(__dirname, '../src/index.ts'), indexContent);
  console.log(`✓ Generated index.ts with ${exports.length} icon components`);
}

buildIcons().catch(console.error);