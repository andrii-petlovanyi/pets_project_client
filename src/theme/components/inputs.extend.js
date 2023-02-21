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

const userInfoActive = defineStyle({
  field: {
    display: 'flex',
    alignItems: 'center',
    padding: '3px 12px',
    height: '32px',
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

const userInfoDisabled = defineStyle({
  field: {
    height: '32px',
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '25px',
    border: 'none',
    backgroundColor: 'white',
    padding: '3px 12px',

    display: 'flex',
    alignItems: 'center',

    color: 'textColor',
    opacity: '1',

    pointerEvents: 'none',
    _hover: {
      cursor: 'auto',
    },
  },
});

const search = defineStyle({
  field: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    height: () => ({ base: '40px', lg: '44px' }),
    marginY: () => ({ base: '28px', lg: '40px' }),

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
      boxShadow: 'mainShadow',
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

const addPetsForm = defineStyle({
  field: {
    background: 'mainColor',
    border: '1px solid rgba(245, 146, 86, 0.5)',
    borderRadius: '40px',

    backgroundColor: 'mainColor',
    color: 'labelColor',

    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '26px',
    /* identical to box height, or 166% */

    display: 'flex',
    alignItems: 'center',

    _placeholder: {
      color: 'labelColor',

      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '26px',
    },
  },
});

const addNoticeForm = defineStyle({
  field: {
    background: 'mainColor',
    border: '1px solid #F5925680',
    borderRadius: '40px',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    width:{base: '240px', lg: '448px' },
    height:{ base: '40px', lg: '48px' },
    

    backgroundColor: 'mainColor',
    

    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize:{base: '14px', lg: '16px' },
    lineHeight: '26px',


    display: 'flex',
    alignItems: 'center',

    _placeholder: {
      color: 'labelColor',

      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize:{base: '14px', lg: '16px' },
      lineHeight: '26px',
    },
  },
});

export const inputTheme = defineStyleConfig({
  variants: { form, search, userInfoActive, userInfoDisabled, addPetsForm, addNoticeForm },
});
