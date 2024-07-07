const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
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

  // Enable static HTML export
  output: 'export',

  // Other configurations can be added here
};

module.exports = nextConfig;