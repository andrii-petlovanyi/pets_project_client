import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#111111',
      background: '#FDF7F2',
    },
    secondary: {
      main: '#F59256',
      background: '#ffffff',
    },
    custom: {
      subTitle: '#F59256',
    },
  },

  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 960,
      xl: 1280,
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlineBG' },
          style: {
            textTransform: 'none',
            background: '#ffffff',
            border: '2px solid #F59256',
            borderRadius: '40px',
            padding: '8px 28px',
            fontFamily: 'Manrope',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '1.35',
            letterSpacing: '0.04em',

            '&:hover': {
              borderColor: '#FF6101',
              background: '#ffffff',
            },
          },
        },
        {
          props: { variant: 'outlineBGActive' },
          style: {
            textTransform: 'none',
            background: '#F59256',
            color: '#ffffff',
            border: '2px solid #F59256',
            borderRadius: '40px',
            padding: '8px 28px',
            fontFamily: 'Manrope',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '1.35',
            letterSpacing: '0.04em',

            '&:hover': {
              borderColor: '#FF6101',
              background: '#FF6101',
            },
          },
        },

        {
          props: { variant: 'outline' },
          style: {
            width: '248px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',

            textTransform: 'none',
            fontFamily: 'Manrope',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '1.37',
            letterSpacing: '0.04em',
            color: '#F59256',
            border: '2px solid #F59256',
            borderRadius: '40px',

            '&:hover': {
              borderColor: '#FF6101',
              color: '#FF6101',
              background: 'none',
            },
          },
        },
      ],
    },
    MuiIconButton: {
      variants: [
        {
          props: { variant: 'custom' },
          style: {
            border: ``,
          },
        },
      ],
    },
  },
});

export default theme;
