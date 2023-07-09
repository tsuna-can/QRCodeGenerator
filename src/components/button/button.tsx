import React from 'react';
import {Button as RNEButton} from '@rneui/themed';
import styles from './button.styles';

type Props = {
  onClick: () => void;
  text?: string;
  disabled?: boolean;
  icon?: JSX.Element;
};

const Button: React.FC<Props> = ({
  onClick,
  text = '',
  disabled = false,
  icon,
}: Props) => {
  return (
    <>
      <RNEButton
        onPress={onClick}
        disabled={disabled}
        buttonStyle={styles.button}
        containerStyle={styles.container}
        icon={icon}>
        {text}
      </RNEButton>
    </>
  );
};

export default Button;
