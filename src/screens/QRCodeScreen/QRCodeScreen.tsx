import React, {useState, useMemo, useContext} from 'react';
import {View, Text, SafeAreaView, useWindowDimensions} from 'react-native';
import Button from '../../components/button/button';
import styles from './QRCodeScreen.style';
import QRCodeView from '../../components/QRCodeView/QRCodeView';
import {zeroPaddiong, calcMaxValue, calcMinValue} from '../../utils/padding';
import Icon from 'react-native-vector-icons/FontAwesome';
import {InitialValueContext} from '../../contexts/initialValueContext';

const QRCodeScreen = () => {
  const {fixedPart, variablePart, digits} = useContext(InitialValueContext);
  const [variablePartState, setVariablePartState] = useState(
    variablePart ? zeroPaddiong(variablePart, digits) : '',
  );

  const minValue = useMemo(() => calcMinValue(digits), [digits]);
  const lastValue = useMemo(() => calcMaxValue(digits), [digits]);

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
          disabled={variablePartState === '' || variablePartState === minValue}
          onClick={() => {
            setVariablePartState(curr => {
              const next = Math.max(Number(curr) - 1, 0);
              return zeroPaddiong(next.toString(), digits);
            });
          }}
          icon={<Icon name="arrow-left" size={50} color="white" />}
        />
        <Button
          disabled={variablePartState === '' || variablePartState === lastValue}
          onClick={() => {
            setVariablePartState(curr => {
              const next = Math.min(Number(curr) + 1, Number(lastValue));
              return zeroPaddiong(next.toString(), digits);
            });
          }}
          icon={<Icon name="arrow-right" size={50} color="white" />}
        />
      </View>
    </SafeAreaView>
  );
};

export default QRCodeScreen;
