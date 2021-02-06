import { makeStyles } from '@material-ui/styles';

interface RadioButtonStyle {
  color: string;
}

export const useStyles = makeStyles({
  root: (props: RadioButtonStyle) => ({
    color: props.color,
    // '&$checked': {
    //   color: props.color,
    // },
    // checked: {
    //   color: props.color,
    // },
  }),
});
