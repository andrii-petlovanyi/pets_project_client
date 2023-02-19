import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './components/buttons.extend';
import { headingTheme } from './components/heading.extend';
import { inputTheme } from './components/inputs.extend';
import { textareaTheme } from './components/textarea.extend';

const breakpoints = {
  sm: '320px',
  md: '480px',
  lg: '768px',
  xl: '1280px',
};

const shadows = {
  mainShadow: '7px 4px 14px rgba(49, 21, 4, 0.07)',
  secondShadow: '7px 4px 14px rgba(0, 0, 0, 0.11)',
};

const colors = {
  white: '#FFFFFF',
  mainColor: '#FDF7F2',
  mainOrange: '#F59256',
  accentOrange: '#FF6101',
  textColor: '#111111',
  secondaryTextColor: '#111321',
  labelColor: 'rgba(17, 17, 17, 0.6)',

  blurBadge: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(10px)',
};

const styles = {
  global: () => ({
    body: {
      bg: 'mainColor',
      color: 'textColor',
    },
  }),
};

const fonts = {
  heading: `'Manrope', sans-serif`,
  body: `'Manrope', sans-serif`,
};

const components = {
  Link: {
    baseStyle: {},
    variants: {
      activeLink: {
        color: 'primaryTextColor',
        textDecoration: 'none',
        transition: '350ms ease',
        _hover: { textDecoration: 'none', color: 'hoverColor' },
        _focus: { boxShadow: 'none' },
        _activeLink: {
          color: '#fff',
        },
      },
      secondary: {
        //...define other variants
      },
    },
  },
  Modal: {
    baseStyle: {
      dialog: {
        // maxWidth: ['95%', '95%', '95%'],
        // minWidth: '95%',
        bg: 'mainColor',
      },
    },
  },

  Input: inputTheme,
  Textarea: textareaTheme,
  Button: buttonTheme,
  Heading: headingTheme,
};

const theme = extendTheme({
  colors,
  shadows,
  styles,
  components,
  breakpoints,
  fonts,
});
export default theme;
