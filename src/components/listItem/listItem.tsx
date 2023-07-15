import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {ListItem as RNEListItem, Divider} from '@rneui/themed';
import COLORS from '../../theme/colors';
import {Icon} from '@rneui/base';
import styles from './listItem.style';

type listItemProps = {
  title: string;
  onPress?: () => void;
  onPressDelete?: () => void;
};

const ListItem = ({
  title,
  onPress = () => {},
  onPressDelete = () => {},
}: listItemProps) => {
  return (
    <>
      <RNEListItem bottomDivider={true}>
        <RNEListItem.Content style={styles.titleContainer}>
          <TouchableOpacity onPress={onPress} style={styles.titleWrapper}>
            <RNEListItem.Title style={styles.title}>{title}</RNEListItem.Title>
          </TouchableOpacity>
        </RNEListItem.Content>
        <RNEListItem.Content right={true} style={styles.iconContainer}>
          <TouchableOpacity onPress={onPressDelete}>
            <Icon name="delete" type="antdesign" color={COLORS.RED} />
          </TouchableOpacity>
        </RNEListItem.Content>
      </RNEListItem>
    </>
  );
};

export default ListItem;
