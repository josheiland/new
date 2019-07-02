import React, { Fragment } from 'react';

// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';

// Material helpers
import { withStyles, withWidth } from '@material-ui/core';

// Material components
import { Drawer } from '@material-ui/core';

// Custom components
import { Sidebar, Topbar, Footer } from './components';

// Component styles
import styles from './styles';

function Dashboard(props) {

  const isOpen = true;
  const { classes, title, children } = props;
  const shiftTopbar = isOpen;
  const shiftContent = isOpen;

  return (
    <Fragment>
      <Topbar
        className={classNames(classes.topbar, {
          [classes.topbarShift]: shiftTopbar
        })}
        isSidebarOpen={isOpen}
        title={title}
      />
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        open={isOpen}
        variant={'persistent'}
      >
        <Sidebar className={classes.sidebar} />
      </Drawer>
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: shiftContent
        })}
      >
        {children}
        <Footer />
      </main>
    </Fragment>
  );
}

export default compose(
  withStyles(styles),
  withWidth()
)(Dashboard);
