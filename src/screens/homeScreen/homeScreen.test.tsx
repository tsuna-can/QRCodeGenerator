import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from './homeScreen';

const navigation = {
  navigate: jest.fn(),
};

const route = {
  params: {
    fixedValue: '',
    variableValue: '',
    digits: 1,
  },
};

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<HomeScreen navigation={navigation} route={route} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
