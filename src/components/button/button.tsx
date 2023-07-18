import React from 'react';
import {Button as RNEButton} from '@rneui/themed';
import styles from './button.styles';

type Props = {
  onClick: () => void;
  text?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  type?: 'solid' | 'outline' | 'clear';
  color?: string;
  buttonStyle?: object;
  containerStyle?: object;
};

const Button: React.FC<Props> = ({
  onClick,
  text = '',
  disabled = false,
  icon,
  type = 'solid',
  color = 'primary',
  buttonStyle = {},
  containerStyle = {},
}: Props) => {
  return (
    <>
      <RNEButton
        onPress={onClick}
        disabled={disabled}
        buttonStyle={{...styles.button, ...buttonStyle}}
        color={color}
        containerStyle={{...styles.container, ...containerStyle}}
        type={type}
        icon={icon}
        iconPosition="right">
        {text}
      </RNEButton>
    </>
  );
};

export default Button;
