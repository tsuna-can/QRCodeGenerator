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
  scrollContainer: {
    flex: 10,
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
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
    borderRadius: 100,
    elevation: 1,
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
    elevation: 1,
  },
  generateButtonContainer: {
    flex: 1,
  },
  generateButton: {
    flex: 1,
  },
});

export default styles;
