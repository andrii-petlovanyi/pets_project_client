import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const logo = defineStyle({
  fontSize: () => ({ base: '28px', lg: '32px' }),
  fontFamily: 'Poppins',
  fontWeight: '700',
  letterSpacing: '0.07em',
  lineHeight: '1.5',
  display: 'flex',
});

export const textTheme = defineStyleConfig({
  variants: { logo },
});
