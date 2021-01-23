import * as React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Route } from '../../../store/routes/types';
import {
  Drawer,
  Typography,
  TextField,
  FormControl,
  MenuItem,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { selectRouteAction as selectRoute } from '../../../features/route-selected/actions';
import { GridContainer, GridItem } from '../../../components';
import { styles } from './styles';
import { messages } from './messages';

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  routeList: Route[];
  value?: number | string;
}

function ControlPanelComponent(props: Props) {
  const { classes, intl, routeList, value } = props;
  const [route, setRoute] = React.useState('0');
  const dispatch = useDispatch();

  const marginTop = classNames({
    [classes.marginTop]: false,
  });

  const inputClasses = classNames({
    [classes.input]: true,
    [classes.inputSelect]: value === '0',
  });

  const inputSelect = classNames({
    [classes.input]: true,
    [classes.inputSelect]: true,
  });

  const selectSmthItem = intl.formatMessage(
    { id: messages.selectSmth },
    {
      smth: intl.formatMessage({ id: messages.trainRoutes }),
    },
  );

  let selectElements = [];
  selectElements[0] = (
    <MenuItem key={'0'} value={'0'} className={inputSelect}>
      {selectSmthItem}
    </MenuItem>
  );
  selectElements = selectElements.concat(
    routeList.map((item: Route) => {
      return (
        <MenuItem key={item.shapeId} value={item.shapeId} className={classes.input}>
          {item.longName} {item.headSign}
        </MenuItem>
      );
    }),
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setRoute(event.target.value);
    const selectedRoute: Route = routeList.filter(r => r.shapeId === event.target.value)[0];
    dispatch(selectRoute(selectedRoute));
  };

  return (
    <Drawer
      classes={{ paper: classNames(classes.drawerPaper, classes.drawer) }}
      anchor="right"
      open={true}
      variant="permanent"
    >
      <div className={classes.drawerHeader}>
        <Typography variant="h6">{intl.formatMessage({ id: messages.trainRoutes })}</Typography>
      </div>
      <GridContainer className={classes.form}>
        <GridItem>
          <br />
          <GridContainer>
            <GridItem>
              <FormControl fullWidth={true}>
                <TextField
                  InputProps={{
                    classes: {
                      input: inputClasses,
                      root: marginTop,
                    },
                  }}
                  InputLabelProps={{
                    className: classes.labelRoot,
                  }}
                  select={true}
                  value={route}
                  label={intl.formatMessage({ id: messages.trainRoutes })}
                  className={classes.margin}
                  onChange={handleChange}
                >
                  {selectElements}
                </TextField>
              </FormControl>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </Drawer>
  );
}

export const ControlPanel = React.memo(injectIntl(withStyles(styles)(ControlPanelComponent)));
