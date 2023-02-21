import * as yup from 'yup';

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const userFormSchema = yup.object({
  name: yup
    .string()
    .trim('The name cannot include leading and trailing spaces')
    .strict(true)
    .min(4, 'Need at least 4 characters')
    .max(20)
    .required(),
  email: yup.string().email('Must be a valid email').required(),
  birthday: yup.string(),
  phone: yup
    .string()
    .min(12)
    .max(15)
    .matches(phoneRegExp, 'Phone number is not valid'),
  city: yup
    .string()
    .trim('The city cannot include leading and trailing spaces')
    .strict(true)
    .required(),
});
