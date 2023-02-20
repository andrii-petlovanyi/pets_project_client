import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const logo = defineStyle({
  fontSize: () => ({ base: '28px', lg: '32px' }),
  fontFamily: 'Poppins',
  fontWeight: '700',
  letterSpacing: '0.07em',
  lineHeight: '1.5',
  display: 'flex',
});

const textLabelUserForm = defineStyle({
  mb: '0',
  mr: '0',
  width: '107px',
  fontFamily: 'Manrope',
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '1.4',
  letterSpacing: '0.04em',
  color: 'textColor',
});

export const textTheme = defineStyleConfig({
  variants: { logo, textLabelUserForm },
});
