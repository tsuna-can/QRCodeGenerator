import React, {useState, createContext, useCallback} from 'react';

type initialValueContextType = {
  digits: number;
  setDigits: React.Dispatch<React.SetStateAction<number>>;
  fixedPart: string;
  setFixedPart: React.Dispatch<React.SetStateAction<string>>;
  variablePart: string;
  setVariablePart: React.Dispatch<React.SetStateAction<string>>;
  resetValues: () => void;
};

export const InitialValueContext = createContext<initialValueContextType>({
  digits: 0,
  setDigits: () => {},
  fixedPart: '',
  setFixedPart: () => {},
  variablePart: '',
  setVariablePart: () => {},
  resetValues: () => {},
});

export const InitialValueProvider = ({children}: any) => {
  const [digits, setDigits] = useState(0);
  const [fixedPart, setFixedPart] = useState('');
  const [variablePart, setVariablePart] = useState('');

  const resetValues = useCallback(() => {
    setDigits(0);
    setFixedPart('');
    setVariablePart('');
  }, []);

  return (
    <InitialValueContext.Provider
      value={{
        digits,
        setDigits,
        fixedPart,
        setFixedPart,
        variablePart,
        setVariablePart,
        resetValues,
      }}>
      {children}
    </InitialValueContext.Provider>
  );
};
