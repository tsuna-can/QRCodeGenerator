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
import {useTranslation} from 'react-i18next';
import '../../utils/i18n/config';

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
  const {t} = useTranslation();

  return (
    <Controller
      control={control}
      name={areaName}
      defaultValue={defaultValue}
      render={({
        field: {onChange, value, onBlur, name},
        formState: {errors},
      }) => (
        <View style={styles.container}>
          <Text style={styles.label}>{props.label}</Text>
          <TextInput
            style={styles.text}
            {...props}
            value={value || ''}
            onBlur={onBlur}
            onChangeText={onChange}
          />
          {errors[name] ? (
            <Text style={styles.errorText}>
              {t(
                `VALIDATION_ERROR.${(
                  errors[name] as DeepMap<FieldValues, FieldError>
                )?.message}` as any,
              )}
            </Text>
          ) : (
            <Text style={styles.errorText} />
          )}
        </View>
      )}
    />
  );
};

export default Input;
