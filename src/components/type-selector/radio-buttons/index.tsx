import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Radio } from '@material-ui/core/';

import { actions } from '../../../features/cases/reducer';

import { useStyles } from './styles';

interface Props {
  color: string;
  type: string;
}

const RadioButtonComponent = (props: Props) => {
  const { color, type } = props;

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changeTypeByCountry(event.target.value));
  };

  const classes = useStyles({
    color: color,
  });

  return (
    <Radio
      size="small"
      onChange={handleChange}
      color="default"
      classes={classes}
      value={type}
      disableRipple
    />
  );
};

export const RadioButton = React.memo(RadioButtonComponent);
