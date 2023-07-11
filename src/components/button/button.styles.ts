import {StyleSheet} from 'react-native';
import COLORS from '../../theme/colors';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 5,
  },
});

export default styles;
