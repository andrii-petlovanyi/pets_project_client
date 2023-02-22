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

const noticeModalText = defineStyle({
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontHeight: '500',
  fontSize:{base: '16px', lg: '20px' },
  lineHeight: {base: '22px', lg: '27px' },
  textAlign: 'center',
  letterSpacing:' -0.01em',
  color: 'textColor',
  width: {base: '240px', lg: '443px' },
  height: {base: '66px', lg: '54px' },
});

const noticesInputsHead = defineStyle({
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontHeight: '500',
  fontSize:{base: '18px', lg: '24px' },
  lineHeight: '26px',
  color: 'textColor',
  marginTop: {base: '12px', lg: '24px' },
  marginBottom: {base: '8px', lg: '12px' }

});

export const textTheme = defineStyleConfig({
  variants: { logo, textLabelUserForm, noticeModalText, noticesInputsHead },
});
