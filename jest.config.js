module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|@rneui/(.*))',
  ],
  setupFiles: ['./src/setupTests.js'],
};
