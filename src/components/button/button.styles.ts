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
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default styles;
