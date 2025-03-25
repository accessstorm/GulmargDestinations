import { createTheme } from '@mui/material/styles';

// Define the theme with custom colors, typography, and other settings
const theme = createTheme({
  palette: {
    primary: {
      main: '#1a2639', // Dark blue for navbar/footer
      light: '#3e4a61',
      dark: '#0d1321',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d98c5f', // Warm accent color
      light: '#f7be8f',
      dark: '#a65d32',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Roboto", "Arial", sans-serif',
    },
    h6: {
      fontFamily: '"Roboto", "Arial", sans-serif',
    },
    body1: {
      fontFamily: '"Roboto", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '"Roboto", "Arial", sans-serif',
    },
    button: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #1a2639 30%, #3e4a61 90%)',
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #d98c5f 30%, #f7be8f 90%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme; 