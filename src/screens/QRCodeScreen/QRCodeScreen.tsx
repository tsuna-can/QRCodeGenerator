import React, {useState, useMemo, useContext} from 'react';
import {View, Text, SafeAreaView, useWindowDimensions} from 'react-native';
import Button from '../../components/button/button';
import styles from './QRCodeScreen.style';
import QRCodeView from '../../components/QRCodeView/QRCodeView';
import {zeroPaddiong, calcMaxValue, calcMinValue} from '../../utils/padding';
import Icon from 'react-native-vector-icons/FontAwesome';
import {InitialValueContext} from '../../contexts/initialValueContext';
import '../../utils/i18n/config';

const QRCodeScreen = () => {
  const {fixedPart, variablePart, digits} = useContext(InitialValueContext);
  const [variablePartState, setVariablePartState] = useState(
    variablePart ? zeroPaddiong(variablePart, digits) : '',
  );

  const minValue = useMemo(() => calcMinValue(digits), [digits]);
  const lastValue = useMemo(() => calcMaxValue(digits), [digits]);

  const onPressLeft = () => {
    setVariablePartState(curr => {
      const decremented = Number(curr) - 1;
      if (digits === 0) {
        return decremented.toString();
      } else {
        const next = Math.max(decremented, 0).toString();
        return zeroPaddiong(next, digits);
      }
    });
  };

  const onPressRight = () => {
    setVariablePartState(curr => {
      const incremented = Number(curr) + 1;
      if (digits === 0) {
        return incremented.toString();
      } else {
        const next = Math.min(incremented, Number(lastValue)).toString();
        return zeroPaddiong(next, digits);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{`${fixedPart}${variablePartState}`}</Text>
      </View>
      <View style={styles.qrCodeContainer}>
        <QRCodeView
          value={`${fixedPart}${variablePartState}`}
          size={useWindowDimensions().width * 0.8}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          disabled={
            variablePartState === '' ||
            (digits > 0 && variablePartState === minValue)
          }
          onClick={onPressLeft}
          icon={<Icon name="arrow-left" size={50} color="white" />}
        />
        <Button
          disabled={
            variablePartState === '' ||
            (digits > 0 && variablePartState === lastValue)
          }
          onClick={onPressRight}
          icon={<Icon name="arrow-right" size={50} color="white" />}
        />
      </View>
    </SafeAreaView>
  );
};

export default QRCodeScreen;
