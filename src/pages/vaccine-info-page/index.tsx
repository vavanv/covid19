import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  withStyles,
  WithStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
} from '@material-ui/core';

import { AppState } from '../../store/types';
import { Drawer, LeftMenu } from '../../components';
// import { Drawer, LeftMenu, Map } from '../../components';
import { actions } from '../../features/vaccine-info/reducer';

import { styles } from './styles';
import { Vaccine } from '../../store/vaccine-info/types';
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
        {/* <Map center={{ lat: 0, lng: 50 }} zoom={3}> */}
        <Paper className={classes.listRoot}>
          <List>
            {vaccineInfo?.map(
              ({ candidate, mechanism, sponsors, details, trialPhase, institutions }: Vaccine) => {
                return (
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={<Typography variant="h6">{candidate}</Typography>}
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Mechanism: {mechanism}
                          </Typography>
                          <br />
                          <Typography variant="body2" component="span" color="textPrimary">
                            Sponsors:
                          </Typography>
                          {sponsors.map(sponsors => {
                            return (
                              <>
                                <br />
                                <Typography variant="body2" component="span" color="textPrimary">
                                  &nbsp;&nbsp;&nbsp;{sponsors}
                                </Typography>
                              </>
                            );
                          })}
                          <br />
                          <br />
                          <Typography variant="body1" component="span" color="textPrimary">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: details,
                              }} // eslint-disable-line
                            />
                          </Typography>
                          <br />
                          <Typography variant="body2" component="span" color="textPrimary">
                            Trial Phase: {trialPhase}
                          </Typography>
                          <br />
                          <Typography variant="body2" component="span" color="textPrimary">
                            Institutions:
                          </Typography>
                          {institutions.map(institutions => {
                            return (
                              <>
                                <br />
                                <Typography variant="body2" component="span" color="textPrimary">
                                  &nbsp;&nbsp;&nbsp;{institutions}
                                </Typography>
                              </>
                            );
                          })}
                          <br />
                          <br />
                        </>
                      }
                    />
                  </ListItem>
                );
              },
            )}
          </List>
        </Paper>
        {/* </Map> */}
      </main>
    </div>
  );
}

export const DetailByVaccine = withStyles(styles)(DetailByVaccineComponent);
