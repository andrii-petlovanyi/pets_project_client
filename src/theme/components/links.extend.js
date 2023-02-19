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
  _activeLink: {
    background: 'mainOrange',
    color: 'white',
  },
});

export const linksTheme = defineStyleConfig({
  variants: { friends, tabLink },
});
