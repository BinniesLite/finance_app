import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#FDD652',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: '#4caf50',
    }, 
    subtitle: {
      main: '#948B93',
    },
    background: {
      default: '#fff',
      dark: "#12131c",}
  },
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
    fontSize: 12,
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
      
    }
  },
  button: {
    textTransform: 'none',
  },
  transitions: {
    duration: {
      shortest: 100,
      shorter: 200,
      short: 300,
      standard: 400,
      complex: 500,
    },
    easing: {
       // This is the most common easing curve.
       easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
  }
});

export default theme;