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
    ZERO_PADDING_ERROR: 'Please input digits more than variable part.',
  },
  VALIDATION_ERROR: {
    NUMBER: 'Please input number only.',
    MAX_LENGTH: 'Max 9 digits.',
    BOTH_NULL: 'Both fields cannot be empty.',
  },
} as const;

export default common;
