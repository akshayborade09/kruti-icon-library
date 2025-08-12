export default {
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
