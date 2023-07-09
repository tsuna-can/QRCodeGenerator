import React from 'react';
import QRCode from 'react-native-qrcode-svg';

type Props = {
  value: string;
  size?: number;
};

const QRCodeView = ({value, size = 30}: Props) => {
  return <QRCode value={value} size={size} logoBackgroundColor="transparent" />;
};

export default QRCodeView;
