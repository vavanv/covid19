import * as React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import classnames from 'classnames';
import { EmojiTransportation as TransportationIcon } from '@material-ui/icons';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import { TitleItem } from '../../../navigation/menu-items/index';
import { TitleSettings } from './settings';

import messages from './messages';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classes: any;
  handleToggle: () => void;
  titleItems: TitleItem[];
}

function TitleComponent(props: Props) {
  const { classes, handleToggle, titleItems, intl } = props;
  return (
    <>
      <ListItem className={classes.header}>
        <ListItemIcon className={classes.itemIcon}>
          <TransportationIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="h6">{intl.formatMessage({ id: messages.application })}</Typography>
          }
          className={classnames(classes.baseHeader)}
        />
      </ListItem>
      <TitleSettings titleItems={titleItems} handleToggle={handleToggle} />
    </>
  );
}

export const Title = React.memo(injectIntl(withStyles(styles)(TitleComponent)));
