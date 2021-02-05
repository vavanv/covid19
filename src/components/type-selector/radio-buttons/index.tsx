import * as React from 'react';
// import { useDispatch } from 'react-redux';
// import { makeStyles, withStyles, WithStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Radio } from '@material-ui/core/';

// import { cases_color, recovered_color, deaths_color } from '../../../assets/jss/portal-material';
// import { styles } from './styles';

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  var a = event.target.value;
};

const useStyles = makeStyles((color: string) => ({
  root: {
    color: `${color}`,
    '&$checked': {
      color: `${color}`,
    },
  },
  checked: {},
}));

interface Props {
  color: string;
  type: string;
}

const RadioButtonComponent = (props: Props) => {
  const { color, type } = props;
  const classes = useStyles({ color });
  return <Radio size="small" onChange={handleChange} className={classes.root} value={type} />;
};

export const RadioButton = React.memo(RadioButtonComponent);

// export const RadioButtonComponent = withStyles({
//   root: {
//     color: cases_color,
//     '&$checked': {
//       color: cases_color,
//     },
//   },
//   checked: {},
// })(props => <Radio {...props} size="small" onChange={handleChange} />);

// export const CasesRadio = withStyles({
//   root: {
//     color: cases_color,
//     '&$checked': {
//       color: cases_color,
//     },
//   },
//   checked: {},
// })(props => <Radio {...props} size="small" onChange={handleChange} />);

// export const RecoveredRadio = withStyles({
//   root: {
//     color: recovered_color,
//     '&$checked': {
//       color: recovered_color,
//     },
//   },
//   checked: {},
// })(props => <Radio {...props} size="small" onChange={handleChange} />);

// export const DeathsRadio = withStyles({
//   root: {
//     color: deaths_color,
//     '&$checked': {
//       color: deaths_color,
//     },
//   },
//   checked: {},
// })(props => <Radio {...props} size="small" onChange={handleChange} />);
