import * as yup from 'yup';

export const locationRegExp = /^\p{L}{3,},\s*\p{L}{3,}$/u;
export const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const passRegexp = /^(?=.*[a-zA-Z]).{7,}$/;
export const priceRegexp = /^[1-9]\d*(\.\d+)?$/;

export const userFormSchema = yup.object({
  name: yup
    .string()
    .trim('The name cannot include leading and trailing spaces')
    .matches(/[a-zA-Zа-яА-Я\s]*$/, 'Please enter valid name')
    .min(4, 'Need at least 4 characters')
    .max(40),
  email: yup.string().email('Must be a valid email'),
  birthday: yup.string().nullable(true),
  phone: yup
    .string()
    .min(13, 'Minimal phone number length is 13 symbols')
    .max(13, 'Max phone number length is 13 symbols')
    .matches(/^\+380\d{9}$/u, 'Please, use only  +  and numbers'),
  city: yup
    .string()
    .trim()
    .matches(locationRegExp, 'City must be in format: City, Region')
    .min(3, 'Minimal city length is 3 symbols')
    .max(32, 'Max city length is 32 symbols'),
  avatarURL: yup.string(),
});
