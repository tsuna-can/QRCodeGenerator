import * as yup from 'yup';

export const qrValueSchema = yup.object().shape({
  fixedPart: yup
    .string()
    .test(
      'validateBothNull',
      'BOTH_NULL',
      function validateBothNull(fixedPart) {
        const {variablePart} = this.parent;
        return !!(fixedPart || variablePart);
      },
    ),
  variablePart: yup
    .string()
    .matches(/^[0-9]*$/, 'NUMBER')
    .max(9, 'MAX_LENGTH'),
});
