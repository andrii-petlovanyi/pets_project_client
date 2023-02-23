import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const friends = defineStyle({
  fontFamily: 'Manrope',
  fontWeight: '700',
  fontSize: () => ({ base: '12px', lg: '16px', xl: '20px' }),
  lineHeight: () => ({ base: '16px', lg: '22px', xl: '27px' }),
  textDecorationLine: 'underline',
  color: 'mainOrange',
});

const tabLink = defineStyle({
  display: 'flex',
  justifyContent: 'center',

  background: 'white',
  color: 'textColor',

  height: () => ({ base: '35px', lg: '47px' }),
  border: '2px solid',
  borderColor: 'mainOrange',
  borderRadius: '40px',
  padding: () => ({ base: '8px 28px', lg: '10px 28px' }),

  fontFamily: 'Manrope',
  fontWeight: '500',
  fontSize: () => ({ base: '14px', lg: '20px' }),
  lineHeight: '1.37',
  letterSpacing: '0.04em',

  transition: 'background 250ms ease-in-out, color 250ms ease-in-out',

  _hover: {
    borderColor: 'accentOrange',
    textDecoration: 'none',
  },
  _activeLink: {
    background: 'mainOrange',
    color: 'white',
  },
});

const logo = defineStyle({});

const headerLink = defineStyle({
  fontFamily: 'Manrope',
  color: 'thirdTextColor',
  fontWeight: '500',
  lineHeight: '1.35',
  fontSize: () => ({ base: '32px', lg: '48px', xl: '20px' }),
  letterSpacing: '0.04em',
  transition: 'background 250ms ease-in-out, color 250ms ease-in-out',
  _hover: {
    textDecoration: 'underline',
    color: 'mainOrange',
  },
  _activeLink: {
    color: 'mainOrange',
    textDecoration: 'underline',
  },
});

export const linksTheme = defineStyleConfig({
  variants: { friends, tabLink, logo, headerLink },
});
