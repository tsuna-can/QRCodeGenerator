import React from 'react';
import {TextInput, TextInputProps, Text, View} from 'react-native';
import {
  Controller,
  Control,
  DeepMap,
  FieldValues,
  FieldError,
} from 'react-hook-form';
import styles from './input.styles';

interface Props extends TextInputProps {
  control: Control<any>;
  areaName: string;
  defaultValue?: any;
  label: string;
  autoCompleteType: string;
}

const Input: React.FC<Props> = ({
  control,
  areaName,
  defaultValue,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={areaName}
      defaultValue={defaultValue}
      render={({
        field: {onChange, value, onBlur, name},
        formState: {errors},
      }) => (
        <View>
          <TextInput
            {...props}
            value={value || ''}
            onBlur={onBlur}
            onChangeText={onChange}
          />
          {errors[name] ? (
            <Text style={styles.text}>
              {(errors[name] as DeepMap<FieldValues, FieldError>)?.message}
            </Text>
          ) : (
            <Text style={styles.text}></Text>
          )}
        </View>
      )}
    />
  );
};

export default Input;
