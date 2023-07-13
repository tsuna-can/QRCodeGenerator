import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from '../../components/button/button';
import styles from './homeScreen.style';
import {SCREENS} from '../../utils/constants';
import {zeroPaddiong, calcMaxValue} from '../../utils/padding';
import {
  useForm,
  Control,
  FieldValues,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form';
import DropDown from '../../components/dropDown/dropDown';
import Input from '../../components/input/input';
import {yupResolver} from '@hookform/resolvers/yup';
import {qrValueSchema} from '../../utils/validation';

const options = [
  {label: '1', value: 1},
  {label: '2', value: 2},
  {label: '3', value: 3},
  {label: '4', value: 4},
  {label: '5', value: 5},
  {label: '6', value: 6},
  {label: '7', value: 7},
  {label: '8', value: 8},
  {label: '8', value: 9},
];

type FormData = {
  fixedPart: string;
  variablePart: string;
};

const HomeScreen = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [digits, setDigits] = useState(1);
  const [items, setItems] = useState(options);

  const {control, handleSubmit, watch} = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(qrValueSchema),
    defaultValues: {
      fixedPart: '',
      variablePart: '',
    },
  });

  const fixedPart = watch('fixedPart');
  const variablePart = watch('variablePart');

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    navigation.navigate(SCREENS.QR_CODE, {
      fixedValue: data.fixedPart,
      variableValue:
        data.variablePart !== '' ? zeroPaddiong(data.variablePart, digits) : '',
      digits: digits,
    });
  };
  const onError: SubmitErrorHandler<FormData> = (errors: any, e: any) =>
    console.log(errors, e);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            control={control as unknown as Control<FieldValues>}
            areaName="fixedPart"
            label="Fixed Part"
            placeholder="Fixed Part"
            autoCompleteType="email"
            autoCapitalize="none"
            style={styles.input}
          />
          <Input
            control={control as unknown as Control<FieldValues>}
            areaName="variablePart"
            label="Variable Part"
            placeholder="Variable Part"
            autoCompleteType="number"
            autoCapitalize="none"
            keyboardType="numeric"
            style={styles.input}
          />
          <View style={styles.dropDownContaier}>
            <DropDown
              open={open}
              value={digits}
              items={items}
              setOpen={setOpen}
              setValue={setDigits}
              setItems={setItems}
              error={digits < variablePart.length}
              errorMessage="Please input digits less than variable part."
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          {variablePart !== '' && (
            <View style={styles.fromToContainer}>
              <Text style={styles.fromToText}>
                {`${fixedPart}${zeroPaddiong(variablePart, digits)}`}
              </Text>
              <Text style={styles.tildeText}>~</Text>
              <Text style={styles.fromToText}>
                {`${fixedPart}${calcMaxValue(digits)}`}
              </Text>
            </View>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            disabled={digits < variablePart.length}
            text="Start Generate"
            onClick={() => {
              handleSubmit(onSubmit, onError)();
            }}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
