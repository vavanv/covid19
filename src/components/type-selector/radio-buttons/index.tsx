import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Radio } from '@material-ui/core/';

import { changeTyByCountryAction as changeTyByCountry } from '../../../features/cases/actions';
import { useStyles } from './styles';

interface Props {
  color: string;
  type: string;
}

const RadioButtonComponent = (props: Props) => {
  const { color, type } = props;

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTyByCountry(event.target.value));
  };

  const classes = useStyles({
    color: color,
  });

  return (
    <Radio size="small" onChange={handleChange} color="default" classes={classes} value={type} />
  );
};

export const RadioButton = React.memo(RadioButtonComponent);
