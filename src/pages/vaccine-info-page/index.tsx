import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  withStyles,
  WithStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';

import { AppState } from '../../store/types';
import { Drawer, LeftMenu, Map } from '../../components';
import { actions } from '../../features/vaccine-info/reducer';

import { styles } from './styles';
interface Props extends WithStyles<typeof styles> {}

function DetailByVaccineComponent(props: Props) {
  const { classes } = props;
  const dispatch = useDispatch();

  const vaccineInfo = useSelector((store: AppState) => store.root.vaccineInfo.items?.data);

  React.useEffect(() => {
    var fetchVaccineInfo = actions.fetchVaccineInfoRequest;
    dispatch(fetchVaccineInfo());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Drawer minWidth={'20px'} anchor={'left'}>
        <LeftMenu />
      </Drawer>
      <main className={classes.content}>
        <Map center={{ lat: 0, lng: 50 }} zoom={3}>
          <List className={classes.listRoot}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Map>
      </main>
    </div>
  );
}

export const DetailByVaccine = withStyles(styles)(DetailByVaccineComponent);
