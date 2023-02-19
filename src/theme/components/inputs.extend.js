import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const form = defineStyle({
  field: {
    display: 'flex',
    alignItems: 'center',
    padding: '13px 32px',

    borderRadius: '40px',
    border: '1px solid',
    borderColor: 'rgba(245, 146, 86, 0.5)',

    color: 'textColor',
    backgroundColor: 'mainColor',

    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '25px',
    letterSpacing: '0.04em',

    _focus: {
      borderColor: 'accentOrange',
      boxShadow: '0 0 1px 1px #D3D3D333',
    },
    _hover: {
      borderColor: 'accentOrange',
    },
    _placeholder: {
      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '25px',
      letterSpacing: '0.04em',
      color: 'labelColor',
    },
  },
});

const search = defineStyle({
  field: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    height: '44px',

    borderRadius: '20px',
    border: '1px solid',
    borderColor: 'rgba(245, 146, 86, 0.5)',

    color: '#535353',
    backgroundColor: 'white',
    boxShadow: 'mainShadow',

    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '0.04em',

    _focus: {
      borderColor: 'accentOrange',
      boxShadow: '0 0 1px 1px #D3D3D333',
    },
    _hover: {
      borderColor: 'accentOrange',
    },
    _placeholder: {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '24px',
      letterSpacing: '0.04em',
      color: 'labelColor',
    },
  },
});

export const inputTheme = defineStyleConfig({
  variants: { form, search },
});
