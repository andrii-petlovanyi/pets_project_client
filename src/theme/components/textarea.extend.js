import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const custom = defineStyle({
  padding: '16px 6px',

  backgroundColor: 'mainColor',
  color: 'textColor',

  border: '1px solid',
  borderColor: 'rgba(245, 146, 86, 0.5)',
  borderRadius: '20px',

  fontFamily: 'Manrope',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '26px',

  _focus: {
    borderColor: 'primaryTextColor',
    boxShadow: '0 0 1px 1px #D3D3D333',
  },
  _hover: {
    borderColor: 'primaryTextColor',
  },

  _placeholder: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '26px',
    color: 'labelColor',
  },
});

export const textareaTheme = defineStyleConfig({
  variants: { custom },
});
