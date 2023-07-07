import React from 'react';
import {Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './arrowButton.styles';

type Props = {
  onClick: () => void;
  text?: string;
  direction?: 'right' | 'left';
  disabled?: boolean;
};

const ArrowButton: React.FC<Props> = ({
  onClick,
  text = '',
  direction = 'right',
  disabled = false,
}: Props) => {
  return (
    <>
      <Button
        onPress={onClick}
        disabled={disabled}
        buttonStyle={styles.button}
        containerStyle={styles.container}
        icon={
          direction === 'right' ? (
            <Icon name="arrow-right" size={50} color="white" />
          ) : (
            <Icon name="arrow-left" size={50} color="white" />
          )
        }>
        {text}
      </Button>
    </>
  );
};

export default ArrowButton;
