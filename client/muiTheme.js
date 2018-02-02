import {
  cyan700,
  yellowA200,
  grey100, grey400, grey500, deepOrangeA400,
  white, darkBlack, fullWhite,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: deepOrangeA400,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: yellowA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: fullWhite,
    secondaryTextColor: fade(fullWhite, 0.7),
    alternateTextColor: fullWhite,
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },
};