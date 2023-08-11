const common = {
  APP_NAME: 'QRコードメーカー',
  FIXED_PART: '定数部分',
  VARIABLE_PART: '変数部分',
  SCREEN_TITLE: {
    HOME: 'QRコードメーカー',
    LIST: '保存済み',
    QR_CODE: 'QRコード',
  },
  HOME: {
    ZERO_PADDING_FOR_VARIABLE_PART: 'ゼロパディング（変数部分）',
    GENERATE_BUTTON: '生成開始',
    SAVE_SUCCESS: '保存されました',
    SAVE_FAILED: '保存できませんでした',
    ZERO_PADDING_ERROR: '変数部分の桁数以上にしてください',
  },
  VALIDATION_ERROR: {
    NUMBER: '数字で入力してください',
    MAX_LENGTH: '最大9桁です',
    BOTH_NULL: '定数部分もしくは変数部分を入力してください',
  },
} as const;

export default common;
