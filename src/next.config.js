// next.config.js
const path = require('path');

module.exports = {
  experimental: {
    appDir: true, // Ensure this is enabled for the App Router
  },
  // Optional: Alias `@` to `src` for cleaner imports
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};
