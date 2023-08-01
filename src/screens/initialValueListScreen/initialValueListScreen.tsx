import React, {useContext} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styles from './initialValueListScreen.style';
import {MMKV_KEYS, SCREENS} from '../../utils/constants';
import {useMMKVObject} from 'react-native-mmkv';
import ListItem from '../../components/listItem/listItem';
import type {initialVaue} from '../../types';
import {InitialValueContext} from '../../contexts/initialValueContext';
import {useNavigation} from '@react-navigation/native';

const InitialValueListScreen = () => {
  const navigation = useNavigation();
  const {setFixedPart, setVariablePart, setDigits} =
    useContext(InitialValueContext);
  const [savedInitialValue, setSavedInitialValue] = useMMKVObject<
    initialVaue[]
  >(MMKV_KEYS.INITIAL_VALUES);

  const handleSubmit = (item: initialVaue) => {
    setFixedPart(item.fixedValue);
    setVariablePart(item.valirableValue || '');
    setDigits(item.digits);
    navigation.navigate(SCREENS.QR_CODE);
  };

  const handleDelete = (index: number) => {
    if (!savedInitialValue) {
      return;
    }
    const newSavedInitialValue = savedInitialValue.filter(
      (item, itemIndex) => itemIndex !== index,
    );
    setSavedInitialValue(newSavedInitialValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {savedInitialValue &&
          savedInitialValue.map((item, index) => {
            return (
              <ListItem
                key={index}
                title={`${item.fixedValue}, ${item.valirableValue}, ${item.digits}`}
                onPress={() => handleSubmit(item)}
                onPressDelete={() => {
                  handleDelete(index);
                }}
              />
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default InitialValueListScreen;
