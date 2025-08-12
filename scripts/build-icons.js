import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { optimize } from 'svgo';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, '../src/icons');
const outDir = path.join(__dirname, '../src/components');

// SVGO configuration to preserve stroke properties and prevent expansion
const svgoConfig = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeUnknownsAndDefaults: {
            keepStrokeAndFill: true
          },
          convertShapeToPath: false, // ❌ stop converting stroked shapes to filled paths
          convertPathData: false,    // ❌ no path coordinate rewriting
        },
      },
    },
    { name: 'removeDimensions', active: true },
    { name: 'removeAttrs', params: { attrs: '(fill)' } } // remove fill but keep stroke
  ],
};

(async () => {
  await fs.ensureDir(outDir);

  const files = await fs.readdir(iconsDir);

  for (const file of files) {
    if (!file.endsWith('.svg')) continue;

    const svgPath = path.join(iconsDir, file);
    const svgCode = await fs.readFile(svgPath, 'utf8');

    // Extract name and create a unique component name
    const nameWithoutExt = file.replace('.svg', '');
    const parts = nameWithoutExt.split(',').map(part => part.trim());
    
    // Create component name with key distinguishing parts
    let componentName;
    if (parts.length > 1) {
      // For files with multiple parts, include key distinguishing words
      const mainPart = parts[0];
      const keyWords = parts.slice(1).filter(part => 
        ['active', 'yes', 'no', 'contra', 'pro'].includes(part.toLowerCase())
      );
      
      if (keyWords.length > 0) {
        componentName = mainPart
          .split(/[\s-_]+/)
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join('') + 
          keyWords
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join('');
      } else {
        componentName = mainPart
          .split(/[\s-_]+/)
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join('');
      }
    } else {
      // For simple names, just use the main part
      componentName = parts[0]
        .split(/[\s-_]+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
    }

    // Optimize SVG with SVGO while preserving stroke properties
    const result = optimize(svgCode, svgoConfig);
    const optimizedSvg = result.data;

    // Extract the inner content of the SVG (everything between <svg> tags)
    const innerContentMatch = optimizedSvg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/s);
    const innerContent = innerContentMatch ? innerContentMatch[1].trim() : '';

    // Convert SVG elements to JSX
    const jsxElements = innerContent
      .replace(/<path\s+([^>]*)\/>/g, (match, attrs) => {
        const attrObj = {};
        attrs.match(/(\w+)="([^"]*)"/g)?.forEach(attr => {
          const [key, value] = attr.split('=');
          attrObj[key] = value.replace(/"/g, '');
        });
        
        // Remove stroke-related attributes since they're set on the SVG element
        delete attrObj.stroke;
        delete attrObj['stroke-width'];
        delete attrObj['stroke-linecap'];
        delete attrObj['stroke-linejoin'];
        
        const attrString = Object.entries(attrObj)
          .map(([key, value]) => `${key}="${value}"`)
          .join(' ');
        
        return `<path ${attrString} />`;
      })
      .replace(/<circle\s+([^>]*)\/>/g, (match, attrs) => {
        const attrObj = {};
        attrs.match(/(\w+)="([^"]*)"/g)?.forEach(attr => {
          const [key, value] = attr.split('=');
          attrObj[key] = value.replace(/"/g, '');
        });
        
        // Remove stroke-related attributes since they're set on the SVG element
        delete attrObj.stroke;
        delete attrObj['stroke-width'];
        delete attrObj['stroke-linecap'];
        delete attrObj['stroke-linejoin'];
        
        const attrString = Object.entries(attrObj)
          .map(([key, value]) => `${key}="${value}"`)
          .join(' ');
        
        return `<circle ${attrString} />`;
      })
      .replace(/<rect\s+([^>]*)\/>/g, (match, attrs) => {
        const attrObj = {};
        attrs.match(/(\w+)="([^"]*)"/g)?.forEach(attr => {
          const [key, value] = attr.split('=');
          attrObj[key] = value.replace(/"/g, '');
        });
        
        // Remove stroke-related attributes since they're set on the SVG element
        delete attrObj.stroke;
        delete attrObj['stroke-width'];
        delete attrObj['stroke-linecap'];
        delete attrObj['stroke-linejoin'];
        
        const attrString = Object.entries(attrObj)
          .map(([key, value]) => `${key}="${value}"`)
          .join(' ');
        
        return `<rect ${attrString} />`;
      });

    // Create the React component with JSX syntax
    const componentCode = `import React from 'react';

const Icon${componentName} = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    ${jsxElements}
  </svg>
);

export default Icon${componentName};
`;

    await fs.writeFile(path.join(outDir, `Icon${componentName}.jsx`), componentCode, 'utf8');
  }

  console.log(`✅ Icons built successfully into ${outDir}`);
})();
