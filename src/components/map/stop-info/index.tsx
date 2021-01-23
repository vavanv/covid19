import * as React from 'react';
import classnames from 'classnames';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  withStyles,
  WithStyles,
  Collapse,
  CardActions,
  IconButton,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { Stop, Facilities, Parking, Parkings } from '../../../store/stops/types';
import { styles } from './styles';
import { messages } from './messages';

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  stop: Stop;
}

const StopInfoComponent = (props: Props) => {
  const { classes, stop, intl } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // eslint-disable-next-line react/no-multi-comp
  const renderFacilities = (facilities: Facilities) => {
    return (
      <Typography variant="caption" component="p" gutterBottom>
        {facilities.map(facility => facility.description).join(', ')}
      </Typography>
    );
  };

  // eslint-disable-next-line react/no-multi-comp
  const renderParking = (parking: Parking, index: number) => {
    return (
      <Typography key={index} variant="caption" component="p" gutterBottom>
        {parking.name}({intl.formatMessage({ id: messages.parkingSpots })}:{parking.parkSpots})
      </Typography>
    );
  };

  const renderParkings = (parkings: Parkings) => {
    return parkings.map(renderParking);
  };

  const expendedClasses = classnames({
    [classes.expand]: !expanded,
    [classes.expandOpen]: expanded,
  });

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="code" color="primary">
              {stop.code}
            </Avatar>
          }
          title={stop.stopName}
          subheader={stop.city}
        />
        <CardContent>
          {stop.streetName && (
            <>
              <Typography variant="subtitle2" component="p">
                {intl.formatMessage({ id: messages.streetName })}
              </Typography>
              <Typography variant="caption" component="p" gutterBottom>
                {stop.streetNumber} {stop.streetName}
              </Typography>
            </>
          )}
          {stop.intersection && (
            <>
              <Typography variant="subtitle2" component="p">
                {intl.formatMessage({ id: messages.intersection })}
              </Typography>
              <Typography variant="caption" component="p" gutterBottom>
                {stop.intersection}
              </Typography>
            </>
          )}
          {stop.drivingDirections && (
            <>
              <Typography variant="subtitle2" component="p">
                {intl.formatMessage({ id: messages.drivingDirection })}
              </Typography>
              <Typography variant="caption" component="p" gutterBottom>
                {stop.drivingDirections}
              </Typography>
            </>
          )}
        </CardContent>
        {(stop.facilities.length > 0 || stop.parkings.length > 0) && (
          <>
            <CardActions disableSpacing={true}>
              <IconButton
                className={expendedClasses}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon fontSize="small" />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                {stop.facilities.length > 0 && (
                  <>
                    <Typography variant="subtitle2" component="p">
                      {intl.formatMessage({ id: messages.facilities })}
                    </Typography>
                    {stop.facilities && renderFacilities(stop.facilities)}
                  </>
                )}
                {stop.parkings.length > 0 && (
                  <>
                    <Typography variant="subtitle2" component="p">
                      {intl.formatMessage({ id: messages.parkings })}
                    </Typography>
                    {stop.parkings && renderParkings(stop.parkings)}
                  </>
                )}
              </CardContent>
            </Collapse>
          </>
        )}
      </Card>
    </div>
  );
};

export const StopInfo = React.memo(injectIntl(withStyles(styles)(StopInfoComponent)));
