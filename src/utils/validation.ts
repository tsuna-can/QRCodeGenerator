import * as yup from 'yup';

export const qrValueSchema = yup.object().shape({
  fixedPart: yup.string().required('固定部分は必須項目です。'),
  variablePart: yup
    .string()
    .required('必須項目です。')
    .matches(/^[0-9]*$/, '数字を入力してください。'),
});
