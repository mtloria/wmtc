import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#202a44',
    },
    secondary: {
      main: '#1e88e5',
    },
    background: {
      default: '#f7f8fa',
      paper: '#fff',
    },
    text: {
      primary: '#202a44',
      secondary: '#4a4a4a',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.8rem',
      fontWeight: 800,
      color: '#202a44',
      letterSpacing: '-0.02em',
      marginBottom: '1.2rem',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 700,
      color: '#202a44',
      letterSpacing: '-0.01em',
      marginBottom: '1rem',
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 600,
      color: '#202a44',
      marginBottom: '0.8rem',
    },
    h4: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: '#202a44',
      marginBottom: '0.7rem',
    },
    body1: {
      fontSize: '1.05rem',
      color: '#4a4a4a',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.98rem',
      color: '#4a4a4a',
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl', // allow wider containers
      },
      styleOverrides: {
        root: {
          maxWidth: '1600px', // increase max width for results table
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '16px',
          paddingRight: '16px',
          width: '100%',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 12px rgba(32,42,68,0.07)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '2.5rem 0',
        },
      },
    },
  },
});

export default theme;
