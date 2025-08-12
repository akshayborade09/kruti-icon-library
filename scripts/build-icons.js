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

    // Extract main name before comma for component name
    const nameWithoutExt = file.replace('.svg', '');
    const mainName = nameWithoutExt.split(',')[0].trim();
    
    const componentName = mainName
      .split(/[\s-_]+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');

    // Optimize SVG with SVGO while preserving stroke properties
    const result = optimize(svgCode, svgoConfig);
    const optimizedSvg = result.data;

    // Extract the inner content of the SVG (everything between <svg> tags)
    const innerContentMatch = optimizedSvg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/s);
    const innerContent = innerContentMatch ? innerContentMatch[1].trim() : '';

    // Convert SVG elements to React.createElement calls
    const reactElements = innerContent
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
          .map(([key, value]) => `"${key}": "${value}"`)
          .join(', ');
        
        return `React.createElement('path', { ${attrString} })`;
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
          .map(([key, value]) => `"${key}": "${value}"`)
          .join(', ');
        
        return `React.createElement('circle', { ${attrString} })`;
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
          .map(([key, value]) => `"${key}": "${value}"`)
          .join(', ');
        
        return `React.createElement('rect', { ${attrString} })`;
      });

    // Split multiple elements and wrap in array
    const elementArray = reactElements
      .split(/(?=React\.createElement)/)
      .filter(el => el.trim())
      .join(', ');

    // Create the React component with preserved stroke properties
    const componentCode = `import * as React from 'react';

const Icon${componentName} = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [${elementArray}]);
};

export default Icon${componentName};
`;

    await fs.writeFile(path.join(outDir, `Icon${componentName}.js`), componentCode, 'utf8');
  }

  console.log(`✅ Icons built successfully into ${outDir}`);
})();
