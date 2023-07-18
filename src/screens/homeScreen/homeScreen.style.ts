import {StyleSheet} from 'react-native';
import COLORS from '../../theme/colors';
import {FONT_SIZES} from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  inputContainer: {
    flex: 4,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    paddingLeft: 10,
    marginVertical: 10,
  },
  dropDownContaier: {
    marginVertical: 10,
    flex: 1,
    zIndex: 1,
  },
  saveButtonContainer: {
    flex: 1,
  },
  saveButton: {
    height: 45,
    width: 45,
    alignSelf: 'flex-end',
    borderRadius: 100,
    elevation: 4,
  },
  textContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fromToContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fromToText: {
    fontSize: FONT_SIZES.xLarge,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  tildeText: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.BLACK,
  },
  storageButtonContainer: {
    flex: 1,
  },
  storageButton: {
    height: 50,
    width: 50,
    borderRadius: 100,
    alignSelf: 'flex-end',
    elevation: 4,
  },
  generateButtonContainer: {
    flex: 1,
  },
  generateButton: {
    flex: 1,
  },
});

export default styles;
