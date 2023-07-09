import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Button from '../../components/button/button';
import styles from './homeScreen.style';
import Input from '../../components/input/input';
import {SCREENS} from '../../utils/constants';
import DropDownPicker from 'react-native-dropdown-picker';
import {zeroPaddiong, calcMaxValue} from '../../utils/padding';

const HomeScreen = ({navigation}) => {
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

  return (
    <SafeAreaView style={styles.container}>
      <Input
        label="Fixed value"
        onChangeText={setFixedValue}
        placeholder="Enter text here"
        errorMessage="Please input number"
      />
      <Input
        label="Variable value"
        onChangeText={setVariableValue}
        placeholder="Enter text here"
        errorMessage="Please input number"
        keyboradType="numeric"
      />
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
        onClick={() => {
          navigation.navigate(SCREENS.QR_CODE, {
            fixedValue: fixedValue,
            variableValue: zeroPaddiong(variableValue, digits),
            digits: digits,
          });
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
