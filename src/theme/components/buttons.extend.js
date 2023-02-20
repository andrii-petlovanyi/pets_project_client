import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outlineTabBtn = defineStyle({
  display: 'flex',
  alignItems: 'center',

  background: 'white',
  color: 'textColor',

  border: '2px solid',
  borderColor: 'mainOrange',
  borderRadius: '40px',
  padding: '10px 28px',

  fontFamily: 'Manrope',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '27p',
  letterSpacing: '0.04em',

  _hover: {
    borderColor: 'accentOrange',
  },
});

const outlineTabActive = defineStyle({
  display: 'flex',
  alignItems: 'center',

  background: 'mainOrange',
  color: 'white',

  border: '2px solid',
  borderColor: 'mainOrange',
  borderRadius: '40px',
  padding: '10px 28px',

  fontFamily: 'Manrope',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '27p',
  letterSpacing: '0.04em',
});

const fullBGBtn = defineStyle({
  display: 'flex',
  alignItems: 'center',

  background: 'mainOrange',
  color: 'white',

  border: '2px solid',
  borderColor: 'mainOrange',
  borderRadius: '40px',
  padding: '10px 28px',

  fontFamily: 'Manrope',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '27p',
  letterSpacing: '0.04em',

  _hover: {
    borderColor: 'accentOrange',
    background: 'accentOrange',
  },
});

const clearBtn = defineStyle({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',

  color: 'mainOrange',

  fontFamily: 'Manrope',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '1.4',

  _hover: {
    color: 'accentOrange',
  },
});

const clearAddBtn = defineStyle({
  fontFamily: 'Manrope',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '27px',
  color: 'textColor',

  gap: '12px',
});

const outlineCardBtn = defineStyle({
  display: 'flex',
  alignItems: 'center',

  background: 'none',
  color: 'mainOrange',

  border: '2px solid',
  borderColor: 'mainOrange',
  borderRadius: '40px',
  padding: '8px 10px',
  maxW: '248px',
  width: '100%',

  fontFamily: 'Manrope',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '22p',
  letterSpacing: '0.04em',

  _hover: {
    borderColor: 'accentOrange',
    color: 'accentOrange',
  },
});

const cardFavIB = defineStyle({
  background: 'blurBadge',
  borderRadius: 'full',
  width: '44px',
  height: '44px',
  padding: '10px',
  color: 'mainOrange',
  fontSize: '28px',

  _hover: {
    color: 'accentOrange',
  },
});

const mainIB = defineStyle({
  background: 'mainOrange',
  borderRadius: 'full',
  width: '44px',
  height: '44px',
  padding: '10px',
  color: 'white',
  fontSize: '28px',

  _hover: {
    backgroundColor: 'accentOrange',
  },
});

const secondIB = defineStyle({
  background: 'mainColor',
  borderRadius: 'full',
  width: '44px',
  height: '44px',
  padding: '10px',
  color: 'labelColor',
  fontSize: '28px',

  _hover: {
    color: 'textColor',
  },
});

const userEditIB = defineStyle({
  background: 'mainColor',
  borderRadius: 'full',
  padding: '6px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'mainOrange',

  _hover: {
    color: 'accentOrange',
  },
});

const userEditDisabledIB = defineStyle({
  background: 'mainColor',
  borderRadius: 'full',
  padding: '6px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'labelColor',

  _hover: {
    color: 'black',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: {
    outlineCardBtn,
    outlineTabActive,
    outlineTabBtn,
    cardFavIB,
    secondIB,
    mainIB,
    fullBGBtn,
    clearBtn,
    clearAddBtn,
    userEditIB,
    userEditDisabledIB,
  },
});
