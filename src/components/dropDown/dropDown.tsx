import React, {Dispatch, SetStateAction} from 'react';
import styles from './dropDown.style';
import DropDownPicker from 'react-native-dropdown-picker';
import {View, Text} from 'react-native';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  value: number | string;
  setValue: Dispatch<SetStateAction<number | number>>;
  items: {label: string; value: number | string}[];
  setItems: Dispatch<SetStateAction<{label: string; value: number | number}[]>>;
  error?: boolean;
  errorMessage?: string;
};

const DropDown = ({
  open,
  setOpen,
  value: digits,
  items,
  setValue: setDigits,
  setItems,
  error = false,
  errorMessage = '',
}: Props) => {
  return (
    <>
      <DropDownPicker
        open={open}
        setOpen={setOpen}
        value={digits}
        setValue={setDigits}
        items={items}
        setItems={setItems}
        listMode="SCROLLVIEW"
        style={styles.style}
        dropDownContainerStyle={styles.dropDownContainer}
      />
      <View>
        <Text style={styles.errorMessage}>{error ? errorMessage : ''}</Text>
      </View>
    </>
  );
};

export default DropDown;
