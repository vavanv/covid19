import { CSSProperties } from '@material-ui/styles';

// Colors
const activeColor = '#eceff1';
// const drawerBackGround = '#19212b';
const drawerBackGround = '#eceff1';
const dividerColor = '#404854';
const headerBackground = '#262f3d';

// Container
const conatinerFluid: CSSProperties = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%',
};

const container = {
  ...conatinerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '540px',
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px',
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px',
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px',
  },
};

// Fonts
const defaultFontFamily: CSSProperties = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
};

const defaultLabelFont: CSSProperties = {
  ...defaultFontFamily,
  fontWeight: 400,
  fontSize: '14px',
  color: 'rgba(0, 0, 0, 0.54)',
};

const defaultFont: CSSProperties = {
  ...defaultFontFamily,
  fontWeight: 300,
  lineHeight: '1.5em',
};

export {
  container,
  conatinerFluid,
  defaultFont,
  activeColor,
  drawerBackGround,
  defaultLabelFont,
  dividerColor,
  headerBackground,
};
