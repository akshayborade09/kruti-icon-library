module.exports = {
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
