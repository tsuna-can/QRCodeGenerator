import {StyleSheet} from 'react-native';
import COLORS from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 40,
    color: COLORS.BLACK,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  qrCodeContainer: {
    flex: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10,
  },
});

export default styles;
