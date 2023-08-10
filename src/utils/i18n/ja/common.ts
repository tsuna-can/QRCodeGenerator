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
    ZERO_PADDING_FOR_VARIABLE_PART: '変数部分のゼロパディング',
    GENERATE_BUTTON: '生成開始',
    SAVE_SUCCESS: '保存されました',
    SAVE_FAILED: '定数部分か変数部分を入力してください',
    ZERO_PADDING_ERROR: '変数部分の桁数より大きい値を入力してください',
  },
} as const;

export default common;
