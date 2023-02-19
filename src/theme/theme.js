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
      tabLink: {
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

        transition: 'background 500ms ease-in-out, color 500ms ease-in-out',

        _hover: {
          borderColor: 'accentOrange',
          textDecoration: 'none',
        },
        _activeLink: {
          background: 'mainOrange',
          color: 'white',
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
