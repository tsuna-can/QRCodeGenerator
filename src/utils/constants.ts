export const SCREENS = {
  HOME: 'Home',
  QR_CODE: 'QRCode',
  LIST: 'List',
} as const;

const MMKV_PREFIX = 'MMKV_';

export const MMKV_KEYS = {
  INITIAL_VALUES: MMKV_PREFIX + 'initialValues',
} as const;
