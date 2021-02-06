import * as React from 'react';
// import { useDispatch } from 'react-redux';
import { Radio } from '@material-ui/core/';

import { useStyles } from './styles';

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // var a = event.target.value;
};
interface Props {
  color: string;
  type: string;
}

const RadioButtonComponent = (props: Props) => {
  const { color, type } = props;
  const classes = useStyles({
    color: color,
  });

  return <Radio size="small" onChange={handleChange} classes={classes} value={type} />;
};

export const RadioButton = React.memo(RadioButtonComponent);
