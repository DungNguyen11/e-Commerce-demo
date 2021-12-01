const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                '@primary-color': '#262626' ,
                // '@link-hover-color:' : '#bfbfbf'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};