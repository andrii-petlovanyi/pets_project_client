import * as yup from 'yup';

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
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
  phone: yup
    .string()
    .min(12)
    .max(15)
    .matches(phoneRegExp, 'phone number is not valid'),
  city: yup
    .string()
    .trim('the city cannot include leading and trailing spaces')
    .strict(true)
    .required(),
});
