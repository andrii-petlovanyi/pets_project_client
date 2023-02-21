import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const main = defineStyle({
  color: 'textColor',
  fontFamily: 'Manrope',
  fontWeight: '700',
  lineHeight: '1.37',
  marginTop: () => ({ base: '42px', lg: '88px', xl: '59px' }),
  fontSize: () => ({ base: '24px', lg: '48px' }),
});

const modalAddTitle = defineStyle({
  fontFamily: 'Manrope',
  fontWeight: '600',
  fontSize: () => ({ base: '24px', md: '36px' }),
  lineHeight: () => ({ base: '33px', md: '49px' }),

  color: 'black',
});

const authForm = defineStyle({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',

  color: 'textColor',

  fontFamily: 'Manrope',
  fontWeight: () => ({ base: 700, md: 500 }),
  fontSize: () => ({ base: '24px', md: '36px' }),
  lineHeight: () => ({ base: '33px', md: '49px' }),
});

export const headingTheme = defineStyleConfig({
  variants: { main, modalAddTitle, authForm },
});
