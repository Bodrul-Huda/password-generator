const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const chokidar = require('chokidar');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

// Add Chokidar-based file watching
const chokidarEnhancement = {
  server: {
    enhanceMiddleware: (middleware, server) => {
      const watcher = chokidar.watch('.', {
        ignored: /node_modules/,
        persistent: true,
      });

      watcher.on('change', file => {
        console.log(`File changed: ${file}`);
      });

      return middleware;
    },
  },
};

// Merge default configuration with Chokidar enhancement
const config = mergeConfig(defaultConfig, chokidarEnhancement);

module.exports = config;
