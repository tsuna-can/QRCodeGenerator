import React from 'react';
import renderer from 'react-test-renderer';
import InitialValueListScreen from './initialValueListScreen';

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<InitialValueListScreen navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
