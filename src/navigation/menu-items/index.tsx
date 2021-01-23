import * as React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Divider,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import {
  Train as TrainIcon,
  Share as ShareIcon,
  MailOutline as ContactMailIcon,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import { ROUTE_ROOT, TRAIN_ROUTES, TRAIN_ROUTES_ONLINE } from '../../app/app/constants';

import { Legal } from './legal';
import { Title } from './title';

import messages from './messages';
import { styles } from './styles';

export interface TitleItem {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  visible: boolean;
  route?: string;
}

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  handleToggle: () => void;
}

function NavBarMainMenuItemsComponent(props: Props) {
  const { classes, handleToggle, intl } = props;

  const titleItems: TitleItem[] = [
    {
      id: messages.contactUs,
      icon: <ContactMailIcon />,
      visible: true,
      // route: ROUTE_CONTACT_US,
    },
  ];

  const items = [
    {
      id: messages.mainItem,
      visible: true,
      subitems: [
        {
          id: messages.stops,
          icon: <TrainIcon />,
          visible: true,
          route: ROUTE_ROOT,
        },
        {
          id: messages.trainRoutes,
          icon: <ShareIcon />,
          visible: true,
          route: TRAIN_ROUTES,
        },
        {
          id: messages.trainRoutesOnLine,
          icon: <ShareIcon />,
          visible: true,
          route: TRAIN_ROUTES_ONLINE,
        },
      ],
    },
  ];

  return (
    <div className={classes.rootDiv}>
      <List className={classes.list}>
        <Title titleItems={titleItems} handleToggle={handleToggle} />
        {items.map(({ id, visible, subitems }) => {
          return visible ? (
            <React.Fragment key={id}>
              <ListItem className={classes.categoryHeader} key={id}>
                <ListItemText
                  classes={{
                    primary: classes.categoryHeaderText,
                  }}
                >
                  {intl.formatMessage({ id: id })}
                </ListItemText>
              </ListItem>
              {subitems.map(({ id: subitemId, icon, visible: visibleSubItem, route }) => {
                return visibleSubItem ? (
                  <Link to={route} key={subitemId}>
                    <ListItem
                      button
                      onClick={handleToggle}
                      className={classes.item}
                      key={subitemId}
                    >
                      <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                      <ListItemText
                        primary={intl.formatMessage({ id: subitemId })}
                        classes={{ primary: classes.itemText }}
                      />
                    </ListItem>
                  </Link>
                ) : null;
              })}
              <Divider className={classes.divider} />
            </React.Fragment>
          ) : null;
        })}
      </List>
      <Legal />
    </div>
  );
}

export const NavBarMainMenuItems = React.memo(
  injectIntl(withStyles(styles)(NavBarMainMenuItemsComponent)),
);
