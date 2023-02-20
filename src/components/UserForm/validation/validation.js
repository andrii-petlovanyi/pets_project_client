import * as yup from 'yup';

export const schema = yup.object({
  name: yup
    .string()
    .trim('the name cannot include leading and trailing spaces')
    .strict(true)
    .min(4, 'need at least 4 characters')
    .max(20)
    .required(),
  email: yup.string().email('must be a valid email').required(),
  birthday: yup.string(),
  phone: yup.string().min(10, 'must be more than 10 characters'),
  city: yup
    .string()
    .trim('the city cannot include leading and trailing spaces')
    .strict(true)
    .required(),
});
