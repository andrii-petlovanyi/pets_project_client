import * as yup from 'yup';

export const locationRegExp = /^\p{L}{3,},\s*\p{L}{3,}$/u;
export const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const passRegexp = /^(?=.*[a-zA-Z]).{7,}$/;
// export const birthdayRegExp = /^\d{2}\.\d{2}\.\d{4}$/;
// export const birthDay =
//   /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;

export const userFormSchema = yup.object({
  name: yup
    .string()
    .trim('The name cannot include leading and trailing spaces')
    .matches(/^[a-zA-Zа-яА-Я\s]*$/, 'Please enter valid name')
    .min(4, 'Need at least 4 characters')
    .max(40),
  email: yup.string().email('Must be a valid email'),
  birthday: yup.string().nullable(true),
  phone: yup
    .string()
    .trim()
    .min(9)
    .max(13)
    .matches(phoneRegExp, 'Phone number is not valid'),
  city: yup
    .string()
    .trim()
    .matches(locationRegExp, 'City must be in format: City, Region')
    .min(3, 'Minimal city length is 3 symbols')
    .max(32, 'Max city length is 32 symbols'),
  avatarURL: yup.string(),
});
