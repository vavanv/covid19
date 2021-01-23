import * as React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import classnames from 'classnames';
import { Settings as SettingsIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import { TitleItem } from '../../../../navigation/menu-items/index';

import messages from './messages';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  handleToggle: () => void;
  titleItems: TitleItem[];
}

function TitleSettingsComponent(props: Props) {
  const { classes, handleToggle, titleItems, intl } = props;
  const items = titleItems.map(({ id, icon, visible, route }) => {
    // eslint-disable-next-line no-nested-ternary
    return visible ? (
      route ? (
        <Link to={route} key={id}>
          <ListItem button onClick={handleToggle} className={classes.headerItem} key={id}>
            <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
            <ListItemText
              primary={intl.formatMessage({ id: id })}
              classes={{ primary: classes.itemText }}
            />
          </ListItem>
        </Link>
      ) : (
        <ListItem button className={classes.headerItem} key={id}>
          <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
          <ListItemText
            primary={intl.formatMessage({ id: id })}
            classes={{ primary: classes.itemText }}
          />
        </ListItem>
      )
    ) : null;
  });
  return (
    <>
      <ListItem className={classnames(classes.header, classes.unPaddedRight)}>
        <ListItemText classes={{ primary: classes.itemText }}>
          {intl.formatMessage({ id: messages.configuration })}
        </ListItemText>
        <IconButton disableRipple className={classes.smallIcon}>
          <SettingsIcon />
        </IconButton>
      </ListItem>
      {items}
    </>
  );
}

export const TitleSettings = injectIntl(withStyles(styles)(TitleSettingsComponent));
