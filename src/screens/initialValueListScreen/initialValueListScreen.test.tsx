import React from 'react';
import renderer from 'react-test-renderer';
import InitialValueListScreen from './initialValueListScreen';
import {InitialValueContext} from '../../contexts/initialValueContext';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('ListScreen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <InitialValueContext.Provider
          value={{
            fixedPart: '123',
            variablePart: '456',
            digits: 5,
            setFixedPart: () => {},
            setVariablePart: () => {},
            setDigits: () => {},
            resetValues: () => {},
          }}>
          <InitialValueListScreen />
        </InitialValueContext.Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
