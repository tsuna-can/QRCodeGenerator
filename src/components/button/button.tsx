import React from 'react';
import {Button as RNEButton} from '@rneui/themed';
import {styles as defaultStyles} from './button.styles';

type Props = {
  onClick: () => void;
  text?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  type?: 'solid' | 'outline' | 'clear';
  color?: string;
  style?: object;
};

const Button: React.FC<Props> = ({
  onClick,
  text = '',
  disabled = false,
  icon,
  type = 'solid',
  color = 'primary',
  style = {},
}: Props) => {
  return (
    <>
      <RNEButton
        onPress={onClick}
        disabled={disabled}
        buttonStyle={{...defaultStyles.button, ...style}}
        color={color}
        containerStyle={defaultStyles.container}
        type={type}
        icon={icon}
        iconPosition="right">
        {text}
      </RNEButton>
    </>
  );
};

export default Button;
