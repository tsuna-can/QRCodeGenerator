import React from 'react';
import {ListItem as RNEListItem} from '@rneui/themed';
import COLORS from '../../theme/colors';

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
      <RNEListItem onPress={onPress}>
        <RNEListItem.Content>
          <RNEListItem.Title>{title}</RNEListItem.Title>
        </RNEListItem.Content>
        <RNEListItem.Chevron
          onPress={onPressDelete}
          color={COLORS.RED}
          type="antdesign"
          name="delete"
        />
      </RNEListItem>
    </>
  );
};

export default ListItem;
