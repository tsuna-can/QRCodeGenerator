import React from 'react';
import {Input as RNEInput} from '@rneui/themed';
import styles from './input.styles';

type Props = {
  label: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  errorMessage?: string;
  keyboradType?: 'numeric' | 'default';
};

const Input = ({
  label,
  onChangeText,
  placeholder = '',
  errorMessage = '',
  keyboradType = 'default',
}: Props): JSX.Element => {
  return (
    <RNEInput
      label={label}
      onChangeText={onChangeText}
      placeholder={placeholder}
      errorStyle={styles.errorMessage}
      errorMessage={errorMessage}
      keyboardType={keyboradType}
    />
  );
};

export default Input;
