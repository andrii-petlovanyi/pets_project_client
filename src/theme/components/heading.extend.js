import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const main = defineStyle({
  color: 'textColor',
  fontFamily: 'Manrope',
  fontWeight: '700',
  lineHeight: '1.37',
  marginTop: () => ({ base: '42px', lg: '88px', xl: '59px' }),
  fontSize: () => ({ base: '24px', lg: '48px' }),
});

export const headingTheme = defineStyleConfig({
  variants: { main },
});
