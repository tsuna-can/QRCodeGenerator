import * as yup from 'yup';

export const qrValueSchema = yup.object().shape({
  fixedPart: yup.string().required('This is required.'),
  variablePart: yup.string().matches(/^[0-9]*$/, 'Pleasa input number only,'),
});
