import React from 'react';
import renderer from 'react-test-renderer';
import QRCodeScreen from './QRCodeScreen';

const navigation = {
  navigate: jest.fn(),
};

const route = {
  params: {
    fixedValue: 'test-fixed-value',
    variableValue: 'test-variable-value',
    digits: 1,
  },
};

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<QRCodeScreen navigation={navigation} route={route} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
