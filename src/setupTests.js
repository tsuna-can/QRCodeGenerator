jest.mock('react-native-localize', () => {
  return {
    getLocales: jest.fn(),
  };
});
