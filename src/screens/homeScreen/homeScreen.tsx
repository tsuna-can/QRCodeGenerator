import React, {useState} from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import Button from '../../components/button/button';
import styles from './homeScreen.style';
import Input from '../../components/input/input';
import {SCREENS} from '../../utils/constants';
import DropDownPicker from 'react-native-dropdown-picker';
import {zeroPaddiong, calcMaxValue} from '../../utils/padding';
import {useForm, Controller, set} from 'react-hook-form';

export type FormData = {
  formFixedValue: string;
  formVariableValue: string;
};

const HomeScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      formFixedValue: '',
      formVariableValue: '',
    },
  });
  const [fixedValue, setFixedValue] = useState('');
  const [variableValue, setVariableValue] = useState('');
  const [open, setOpen] = useState(false);
  const [digits, setDigits] = useState(1);
  const [items, setItems] = useState([
    {label: '1', value: 1},
    {label: '2', value: 2},
    {label: '3', value: 3},
    {label: '4', value: 4},
    {label: '5', value: 5},
    {label: '6', value: 6},
    {label: '7', value: 7},
    {label: '8', value: 8},
    {label: '8', value: 9},
  ]);

  const onSubmit = (data: FormData) => {
    navigation.navigate(SCREENS.QR_CODE, {
      fixedValue: data.formFixedValue,
      variableValue: zeroPaddiong(data.formVariableValue, digits),
      digits: digits,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Fixed value"
              onBlur={onBlur}
              onChangeText={value => {
                onChange(value);
                setFixedValue(value);
              }}
              value={value}
            />
          )}
          name="formFixedValue"
        />
        {errors.formFixedValue && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 10,
            pattern: /^[0-9]*$/,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Variable value"
              onBlur={onBlur}
              onChangeText={value => {
                onChange(value);
                setVariableValue(value);
              }}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="formVariableValue"
        />
        {errors.formVariableValue && (
          <Text>Please input only numeric value.</Text>
        )}
      </View>
      <DropDownPicker
        open={open}
        value={digits}
        items={items}
        setOpen={setOpen}
        setValue={setDigits}
        setItems={setItems}
      />
      <Text>
        From : {`${fixedValue}${zeroPaddiong(variableValue, digits)}`}
      </Text>
      <Text>To : {`${fixedValue}${calcMaxValue(digits)}`}</Text>
      <Button
        text="Start Generate"
        disabled={fixedValue === '' && variableValue === ''}
        onClick={handleSubmit(onSubmit)}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
