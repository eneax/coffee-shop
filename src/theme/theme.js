import { createMuiTheme } from '@material-ui/core/styles';

import * as colors from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    text: {
      primary: colors.primaryTextColor,
      secondary: colors.secondaryTextColor,
    },
    info: {
      main: colors.infoColor,
    },
    success: {
      main: colors.successColor,
    },
    error: {
      main: colors.errorColor,
    },
    warning: {
      main: colors.warningColor,
    },
    background: {
      primary: colors.primaryBackground,
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    htmlFontSize: 10,
    fontSize: 10,
  },
  overrides: {
    MuiSvgIcon: {},
    MuiButton: {},
    MuiCssBaseline: {},
    MuiTooltip: {},
  },
  // additional custom props
});

export default theme;
