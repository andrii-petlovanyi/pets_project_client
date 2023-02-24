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
    width: '216px',
    height: '32px',

    borderRadius: '40px',
    border: '1px solid',
    borderColor: 'rgba(245, 146, 86, 0.5)',
    color: 'black',
    backgroundColor: 'mainColor',

    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: { base: '12px', lg: '18px' },
    lineHeight: { base: '1.33', lg: '1.38' },
    letterSpacing: '0.04em',

    _focus: {
      borderColor: 'accentOrange',
      boxShadow: '0 0 1px 1px #D3D3D333',
    },
    _hover: {
      borderColor: 'accentOrange',
    },

    _disabled: {
      opacity: 1,
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
    display: 'flex',
    alignItems: 'center',
    width: '216px',
    height: '32px',
    padding: '3px 12px',

    backgroundColor: 'white',
    color: 'black',

    border: 'none',

    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: { base: '12px', lg: '18px' },
    lineHeight: { base: '1.33', lg: '1.38' },
    letterSpacing: '0.04em',

    pointerEvents: 'none',
    _hover: {
      cursor: 'auto',
    },
    _disabled: {
      opacity: 1,
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
    width: { base: '100%', lg: '448px' },
    height: { base: '40px', lg: '48px' },

    backgroundColor: 'mainColor',

    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: { base: '14px', lg: '16px' },
    lineHeight: '26px',

    display: 'flex',
    alignItems: 'center',

    _placeholder: {
      color: 'labelColor',

      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: { base: '14px', lg: '16px' },
      lineHeight: '26px',
    },
  },
});

const authForm = defineStyle({
  field: {
    height: () => ({ base: '40px', lg: '52px' }),

    background: 'mainColor',
    padding: () => ({ base: '11px 14px', lg: '14px 32px' }),
    border: '1px solid',
    borderColor: 'rgba(245, 146, 86, 0.5)',
    borderRadius: '40px',

    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: () => ({ base: '14px', lg: '18px' }),
    lineHeight: () => ({ base: '19px', lg: '25px' }),

    _placeholder: {
      color: 'labelColor',
    },
  },
});

export const inputTheme = defineStyleConfig({
  variants: {
    form,
    search,
    userInfoActive,
    userInfoDisabled,
    addPetsForm,
    authForm,
    addNoticeForm,
  },
});
