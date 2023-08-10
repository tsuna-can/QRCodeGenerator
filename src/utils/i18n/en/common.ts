const common = {
  APP_NAME: 'QR Code Generator',
  FIXED_PART: 'Fixed part',
  VARIABLE_PART: 'Variable part',
  SCREEN_TITLE: {
    HOME: 'QR Code Generator',
    LIST: 'Saved Values',
    QR_CODE: 'QR code',
  },
  HOME: {
    ZERO_PADDING_FOR_VARIABLE_PART: 'Zero padding for variable part',
    GENERATE_BUTTON: 'Start Generate',
    SAVE_SUCCESS: 'Successfully saved',
    SAVE_FAILED: 'One of the fields must be filled in.',
    ZERO_PADDING_ERROR: 'Please input digits less than variable part.',
  },
} as const;

export default common;
