const path = require('path');

module.exports = {
  // Set the include path for Sass styles
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  
  // Add a trailing slash to the end of URLs
  trailingSlash: true,

  // Disable font optimization
  optimizeFonts: false,

  // Specify the directory for the build output
  distDir: 'build',

  // Other configurations can be added here
};
