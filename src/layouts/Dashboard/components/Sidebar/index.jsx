import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Externals
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';

// Material icons
import {
  DashboardOutlined as DashboardIcon,
  InfoOutlined as InfoIcon,
  Home as HomeIcon,
  ShowChart as ChartIcon,
  List as ListIcon,
  Cast as CastIcon,
} from '@material-ui/icons';

// Component styles
import styles from './styles';

function Sidebar(props) {
  const { classes, className } = props;

  const rootClassName = classNames(classes.root, className);

  return (
    <nav className={rootClassName}>
      <div className={classes.logoWrapper}>
        <Link
          className={classes.logoLink}
          to="/"
        >
          <Typography>
            Insert Logo Here
          </Typography>
        </Link>
      </div>
      <Divider className={classes.profileDivider} />
      <List
        component="div"
        disablePadding
      >
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={NavLink}
          to="/dashboard"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Navigace"
          />
        </ListItem>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={NavLink}
          to="/db-2"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Diagnostika"
          />
        </ListItem>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={NavLink}
          to="/db-3"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <ChartIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Systém Ochran"
          />
        </ListItem>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={NavLink}
          to="/db-4"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <ListIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Filtroventilace"
          />
        </ListItem>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={NavLink}
          to="/db-5"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <CastIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Detekce - Indikace"
          />
        </ListItem>
      </List>
      <Divider className={classes.listDivider} />
      <List
        component="div"
        disablePadding
      >
        <ListItem
          className={classes.listItem}
          component="a"
          href="https://www.vitrix.cz/"
          target="_blank"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Support"
          />
        </ListItem>
      </List>
    </nav>
  );
}

export default withStyles(styles)(Sidebar);
