import React, {useState, useRef, useMemo} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Button from '../../components/button/button';
import styles from './QRCodeScreen.style';
import QRCodeView from '../../components/QRCodeView/QRCodeView';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../App';
import {zeroPaddiong, calcMaxValue, calcMinValue} from '../../utils/padding';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = NativeStackScreenProps<RootStackParamList, 'QRCode'>;

const QRCodeScreen = ({navigation, route}: Props) => {
  const fixedValue = useRef(route.params.fixedValue);
  const [variableValue, setVariableValue] = useState(
    route.params.variableValue,
  );
  const digits = useRef(route.params.digits);

  const minValue = useMemo(() => calcMinValue(digits.current), [digits]);
  const lastValue = useMemo(() => calcMaxValue(digits.current), [digits]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text
          style={styles.text}>{`${fixedValue.current}${variableValue}`}</Text>
      </View>
      <View style={styles.qrCodeContainer}>
        <QRCodeView
          value={`${fixedValue.current}${variableValue}`}
          size={250}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          disabled={variableValue === minValue}
          onClick={() => {
            setVariableValue(curr => {
              const next = Math.max(Number(curr) - 1, 0);
              return zeroPaddiong(next.toString(), digits.current);
            });
          }}
          icon={<Icon name="arrow-left" size={50} color="white" />}
        />
        <Button
          disabled={variableValue === lastValue}
          onClick={() => {
            setVariableValue(curr => {
              const next = Math.min(Number(curr) + 1, Number(lastValue));
              return zeroPaddiong(next.toString(), digits.current);
            });
          }}
          icon={<Icon name="arrow-right" size={50} color="white" />}
        />
      </View>
    </SafeAreaView>
  );
};

export default QRCodeScreen;
