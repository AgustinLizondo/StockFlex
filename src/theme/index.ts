import { extendTheme } from 'native-base';
import Fonts from './fonts';

const theme = extendTheme({
  fontConfig: {
    Montserrat: {
      100: {
        normal: Fonts.Regular,
      },
      200: {
        normal: Fonts.Regular,
      },
      300: {
        normal: Fonts.Regular,
      },
      400: {
        normal: Fonts.Regular,
      },
      500: {
        normal: Fonts.Medium,
      },
      600: {
        normal: Fonts.SemiBold,
      },
      700: {
        normal: Fonts.SemiBold,
      },
      800: {
        normal: Fonts.Bold,
      },
      900: {
        normal: Fonts.Bold,
      },
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
    mono: 'Montserrat',
  },
  config: {
    useSystemColorMode: false,
  },
});

export default theme;
