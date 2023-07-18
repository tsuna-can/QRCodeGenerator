import {StyleSheet} from 'react-native';
import COLORS from '../../theme/colors';

const styles = StyleSheet.create({
  dropDownStyle: {
    borderWidth: 0,
    marginVertical: 10,
  },
  dropDownContainer: {
    borderColor: COLORS.GRAY,
  },
  errorMessage: {
    color: COLORS.RED,
  },
  label: {
    color: COLORS.BLACK,
  },
});

export default styles;
