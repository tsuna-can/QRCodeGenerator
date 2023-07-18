import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from '../../components/button/button';
import styles from './homeScreen.style';
import {SCREENS, MMKV_KEYS} from '../../utils/constants';
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
import {useMMKVObject} from 'react-native-mmkv';
import type {HomeScreenProps} from '../../App';
import type {initialVaue} from '../../types';
import Toast from 'react-native-toast-message';
import {Icon} from '@rneui/base';
import COLORS from '../../theme/colors';

const options = [
  {label: '1', value: 1},
  {label: '2', value: 2},
  {label: '3', value: 3},
  {label: '4', value: 4},
  {label: '5', value: 5},
];

type FormData = {
  fixedPart: string;
  variablePart: string;
};

const showSuccessTost = () => {
  Toast.show({
    type: 'success',
    position: 'bottom',
    text1: 'Saved successfully',
    visibilityTime: 2000,
    autoHide: true,
  });
};

const showErrorTost = () => {
  Toast.show({
    type: 'error',
    position: 'bottom',
    text1: 'One of the fields must be filled in.',
    visibilityTime: 2000,
    autoHide: true,
  });
};

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  const [open, setOpen] = useState(false);
  const [digits, setDigits] = useState(route.params.digits);
  const [items, setItems] = useState(options);
  const [savedInitialValue, setsavedInitialValue] = useMMKVObject<
    initialVaue[]
  >(MMKV_KEYS.INITIAL_VALUES);

  const {control, handleSubmit, watch, setValue} = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(qrValueSchema),
    defaultValues: {
      fixedPart: route.params.fixedValue,
      variablePart: route.params.variableValue,
    },
  });

  const fixedPart = watch('fixedPart');
  const variablePart = watch('variablePart');

  useEffect(() => {
    setValue('fixedPart', route.params.fixedValue);
    setValue('variablePart', route.params.variableValue);
    setDigits(route.params.digits);
  }, [route, setValue]);

  const onSave = (
    currentSavedInitialValues: initialVaue[],
    newFixedPart: string,
    newVariablePart: string,
    newDigits: number,
  ) => {
    if (newFixedPart === '' && newVariablePart === '') {
      showErrorTost();
    } else {
      const newSavedInitialValues = [
        ...currentSavedInitialValues,
        {
          fixedValue: newFixedPart,
          valirableValue: newVariablePart,
          digits: newDigits,
        },
      ];
      setsavedInitialValue(newSavedInitialValues);
      showSuccessTost();
    }
  };

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
              label={'Digits for variable part'}
              errorMessage="Please input digits less than variable part."
            />
          </View>
        </View>
        <View style={styles.saveButtonContainer}>
          <Button
            onClick={() => {
              onSave(savedInitialValue || [], fixedPart, variablePart, digits);
            }}
            color={COLORS.WHITE}
            buttonStyle={styles.saveButton}
            icon={<Icon type="material-community" name="star" color="orange" />}
          />
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
        <View style={styles.storageButtonContainer}>
          <Button
            buttonStyle={styles.storageButton}
            color={COLORS.WHITE}
            onClick={() => navigation.navigate(SCREENS.LIST)}
            icon={<Icon type="material" name="storage" color="black" />}
          />
        </View>
        <View style={styles.generateButtonContainer}>
          <Button
            disabled={digits < variablePart.length}
            text="Start Generate"
            buttonStyle={styles.generateButton}
            onClick={() => {
              handleSubmit(onSubmit, onError)();
            }}
          />
        </View>
        <Toast />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
