import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// primary 黃
// secondary 紅
const themeOption = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F5B041',
      light: '#f5f5f5',
      dark: '#CF9200',
      contrastText: '#0A0A0A',
    },
    secondary: {
      main: '#f50057',
      light: 'rgb(247, 51, 120)',
      dark: 'rgb(171, 0, 60)',
      contrastText: '#fff',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#fff',
      disabled: 'rgba(255, 255, 255, 0.5)',
      gain: '#4caf50',
      loss: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Monospace',
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          whiteSpace: 'nowrap',
          padding: '16px',
          '@media (max-width: 600px)': {
            paddingLeft: '8px',
            paddingRight: '8px',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
          '@media (max-width: 600px)': {
            paddingLeft: '12px',
            paddingRight: '12px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#fff',
          color: '#000',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          border: '1px solid #fff',
          color: '#000',
          maxWidth: '200px',
          fontSize: '14px',
          '@media (max-width: 600px)': {
            maxWidth: '150px',
            fontSize: '12px',
          },
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(themeOption);

export const landingTheme = {
  gridContainer: {
    maxWidth: '1200px',
    justifyContent: 'center',
    margin: '0 auto',
    minHeight: { xs: 566, sm: 700 },
    position: ['relative', null, null],
  },

  mobileBox: {
    padding: '30px 20px',
    textAlign: 'center',
  },

  gridItemBanner: {
    textAlign: 'left',
    position: 'relative',
  },

  content: {
    zIndex: 1,
    paddingLeft: 5,
    position: 'relative',
  },
  brand: {
    fontWeight: 900,
    letterSpacing: 1,
  },
  form: {
    padding: { xs: '20px 20px 30px', sm: '0 40px 10px 10px' },
    boxShadow: { xs: '0 2px 10px 0 rgba(0,0,0,0.12)', sm: 0 },
    zIndex: 1,
  },
};
