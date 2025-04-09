const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set the include path for Sass styles
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  // Add a trailing slash to the end of URLs (ensure this is necessary for your project)
  trailingSlash: true,

  // Disable font optimization (can be helpful to test if this is causing issues)
  optimizeFonts: false,

  // Ensure the build output uses the default '.next' folder
  // distDir: 'build', // Remove this line

  // Uncomment this if you're exporting the app as a static site
  // output: 'export',
};

module.exports = nextConfig;
