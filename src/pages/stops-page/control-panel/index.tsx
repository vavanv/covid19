import * as React from 'react';
import { useDispatch } from 'react-redux';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import {
  Divider,
  Typography,
  withStyles,
  WithStyles,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from '@material-ui/core';
import {
  Train as TrainIcon,
  DirectionsBus as BusIcon,
  DeviceHub as TransportationHubIcon,
} from '@material-ui/icons';
import { showStopsAction as showStops } from '../../../features/stops/actions';
import { GridContainer, GridItem } from '../../../components';
import { actions } from '../../../features/stops/constants';
import { styles } from './styles';
import { messages } from './messages';

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {}

function ControlPanelComponent(props: Props) {
  const { classes, intl } = props;

  const dispatch = useDispatch();
  const checkBuses = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const checkTrains = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  function handleChange() {
    const buses: boolean = checkBuses.current.checked;
    const trains: boolean = checkTrains.current.checked;
    let payload = actions.NONE;
    if (buses && trains) {
      payload = actions.ALL;
    } else if (buses) {
      payload = actions.BUSES;
    } else if (trains) {
      payload = actions.TRAINS;
    }
    dispatch(showStops(payload));
  }

  return (
    <div className={classes.controlPanel}>
      <GridContainer className={classes.form}>
        <GridItem>
          <Typography variant="h6">{intl.formatMessage({ id: messages.stops })}</Typography>
          <br />
          <Divider />
          <br />
          <GridContainer>
            <GridItem>
              <FormControlLabel
                control={
                  <Checkbox
                    id="trains"
                    color="primary"
                    name="trains"
                    onChange={handleChange}
                    inputRef={checkTrains}
                  />
                }
                label={intl.formatMessage({ id: messages.trains })}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="buses"
                    color="primary"
                    onChange={handleChange}
                    inputRef={checkBuses}
                  />
                }
                label={intl.formatMessage({ id: messages.buses })}
              />
            </GridItem>
            <GridItem>
              <br />
              <Divider />
              <br />
              <FormHelperText>{intl.formatMessage({ id: messages.legend })}</FormHelperText>
              <FormHelperText>
                <TrainIcon fontSize="small" className={classes.legend} />{' '}
                {intl.formatMessage({ id: messages.trains })}
              </FormHelperText>
              <FormHelperText>
                <BusIcon fontSize="small" className={classes.legend} />{' '}
                {intl.formatMessage({ id: messages.buses })}
              </FormHelperText>
              <FormHelperText>
                <TransportationHubIcon fontSize="small" className={classes.legend} />{' '}
                {intl.formatMessage({ id: messages.trainsAndBuses })}
              </FormHelperText>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export const ControlPanel = React.memo(injectIntl(withStyles(styles)(ControlPanelComponent)));
