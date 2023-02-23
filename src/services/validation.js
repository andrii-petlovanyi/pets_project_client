import * as yup from 'yup';

export const locationRegExp = /^\p{L}{3,},\s*\p{L}{3,}$/u;
export const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const passRegexp = /^(?=.*[a-zA-Z])(?=.*\d).{7,}$/;
export const birthdayRegExp = /^\d{2}\.\d{2}\.\d{4}$/;
export const birthDay =
  /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;

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
    .trim()
    // .min(12)
    // .max(15)
    .matches(phoneRegExp, 'Phone number is not valid'),
  city: yup
    .string()
    .trim('The city cannot include leading and trailing spaces')
    .strict(true)
    .required(),
  avatarURL: yup.string(),
});
