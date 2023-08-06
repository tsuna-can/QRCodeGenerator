import {StyleSheet} from 'react-native';
import COLORS from '../../theme/colors';
import {FONT_SIZES} from '../../theme/theme';

const common = StyleSheet.create({
  fromToText: {
    fontSize: FONT_SIZES.xLarge,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  inputContainer: {
    flex: 6,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
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
    elevation: 2,
  },
  textContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fromToContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixedPartText: {
    ...common.fromToText,
  },
  variablePartText: {
    ...common.fromToText,
    color: COLORS.GRAY,
  },
  tildeText: {
    ...common.fromToText,
    fontSize: FONT_SIZES.medium,
  },
  storageButtonContainer: {
    flex: 1,
  },
  storageButton: {
    height: 50,
    width: 50,
    borderRadius: 100,
    alignSelf: 'flex-end',
    elevation: 2,
  },
  generateButtonContainer: {
    flex: 1,
  },
  generateButton: {
    flex: 1,
  },
});

export default styles;
