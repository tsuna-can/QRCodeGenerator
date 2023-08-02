import React from 'react';
import renderer from 'react-test-renderer';
import QRCodeScreen from './QRCodeScreen';
import {InitialValueContext} from '../../contexts/initialValueContext';

describe('QRCodeScreen', () => {
  it('renders correctly', async () => {
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
          <QRCodeScreen />,
        </InitialValueContext.Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  }, 2000);
});
