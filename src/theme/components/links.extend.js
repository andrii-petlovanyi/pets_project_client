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

  border: '2px solid',
  borderColor: 'mainOrange',
  borderRadius: '40px',
  padding: () => ({ base: '8px 28px', lg: '10px 28px' }),

  fontFamily: 'Manrope',
  fontWeight: '500',
  fontSize: () => ({ base: '14px', lg: '20px' }),
  lineHeight: '1.37',
  letterSpacing: '0.04em',

  transition: 'background 500ms ease-in-out, color 250ms ease-in-out',

  _hover: {
    borderColor: 'accentOrange',
    textDecoration: 'none',
  },
  _activeLink: {
    background: 'mainOrange',
    color: 'white',
  },
});

export const linksTheme = defineStyleConfig({
  variants: { friends, tabLink },
});
