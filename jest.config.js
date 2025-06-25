module.exports = {
  preset: 'react-native',
  setupFiles: ['./jestSetupFile.js'],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native|@react-native-async-storage/async-storage|@react-native-community/netinfo|@react-navigation)',
  ],
};
