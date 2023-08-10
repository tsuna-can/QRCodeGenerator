import React, {useState, useContext, useCallback} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Button from '../../components/button/button';
import styles from './homeScreen.style';
import {SCREENS, MMKV_KEYS} from '../../utils/constants';
import {zeroPaddiong} from '../../utils/padding';
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
import type {RootStackParamList} from '../../App';
import type {initialVaue} from '../../types';
import Toast from 'react-native-toast-message';
import {Icon} from '@rneui/base';
import COLORS from '../../theme/colors';
import {InitialValueContext} from '../../contexts/initialValueContext';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import '../../utils/i18n/config';

const options = [
  {label: 'none', value: 0},
  {label: '1', value: 1},
  {label: '2', value: 2},
  {label: '3', value: 3},
  {label: '4', value: 4},
  {label: '5', value: 5},
  {label: '6', value: 6},
  {label: '7', value: 7},
  {label: '8', value: 8},
  {label: '9', value: 9},
];

type FormData = {
  fixedPart: string;
  variablePart: string;
};

const showSuccessToast = (message: string) => {
  Toast.show({
    type: 'success',
    position: 'bottom',
    text1: message,
    visibilityTime: 2000,
    autoHide: true,
  });
};

const showErrorToast = (message: string) => {
  Toast.show({
    type: 'error',
    position: 'bottom',
    text1: message,
    visibilityTime: 2000,
    autoHide: true,
  });
};

const HomeScreen = () => {
  const {t} = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  const {
    fixedPart,
    setFixedPart,
    variablePart,
    setVariablePart,
    digits,
    setDigits,
  } = useContext(InitialValueContext);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(options);
  const [savedInitialValue, setsavedInitialValue] = useMMKVObject<
    initialVaue[]
  >(MMKV_KEYS.INITIAL_VALUES);

  const {control, handleSubmit, watch, setValue} = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(qrValueSchema),
    defaultValues: {
      fixedPart: '',
      variablePart: '',
    },
  });

  const fixedPartState = watch('fixedPart');
  const variablePartState = watch('variablePart');

  useFocusEffect(
    useCallback(() => {
      setValue('fixedPart', fixedPart);
      setValue('variablePart', variablePart);
    }, [setValue, fixedPart, variablePart]),
  );

  const onSave: SubmitHandler<FormData> = (data: FormData) => {
    const newValues = {
      fixedValue: data.fixedPart,
      valirableValue: data.variablePart,
      digits: digits,
    };
    const newSavedInitialValues = savedInitialValue
      ? savedInitialValue.concat(newValues)
      : [newValues];
    setsavedInitialValue(newSavedInitialValues);
    showSuccessToast(t('HOME.SAVE_SUCCESS'));
  };

  const onSaveError: SubmitErrorHandler<FormData> = (errors: any, e: any) => {
    console.log(errors, e);
    showErrorToast(t('HOME.SAVE_FAILED'));
  };

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    setFixedPart(data.fixedPart);
    setVariablePart(data.variablePart);
    setDigits(digits);
    navigation.navigate(SCREENS.QR_CODE);
  };

  const onSubmitError: SubmitErrorHandler<FormData> = (errors: any, e: any) =>
    console.log(errors, e);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.inputContainer}>
            <Input
              control={control as unknown as Control<FieldValues>}
              areaName="fixedPart"
              label={t('FIXED_PART')}
              placeholder={t('FIXED_PART')}
              autoCompleteType="email"
              autoCapitalize="none"
              style={styles.input}
            />
            <Input
              control={control as unknown as Control<FieldValues>}
              areaName="variablePart"
              label={t('VARIABLE_PART')}
              placeholder={t('VARIABLE_PART')}
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
                error={digits > 0 && digits < variablePartState.length}
                label={t('HOME.ZERO_PADDING_FOR_VARIABLE_PART')}
                errorMessage={t('HOME.ZERO_PADDING_ERROR')}
              />
            </View>
          </View>
          <View style={styles.saveButtonContainer}>
            <Button
              onClick={() => {
                handleSubmit(onSave, onSaveError)();
              }}
              color={COLORS.WHITE}
              buttonStyle={styles.saveButton}
              icon={
                <Icon type="material-community" name="star" color="orange" />
              }
            />
          </View>
          <View style={styles.textContainer}>
            <Text>
              <Text style={styles.fixedPartText}>{`${fixedPartState}`}</Text>
              <Text style={styles.variablePartText}>{`${zeroPaddiong(
                variablePartState,
                digits,
              )}`}</Text>
            </Text>
          </View>
        </ScrollView>
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
          disabled={digits > 0 && digits < variablePartState.length}
          text={t('HOME.GENERATE_BUTTON')}
          buttonStyle={styles.generateButton}
          onClick={() => {
            handleSubmit(onSubmit, onSubmitError)();
          }}
        />
      </View>
      <Toast />
    </SafeAreaView>
  );
};

export default HomeScreen;
