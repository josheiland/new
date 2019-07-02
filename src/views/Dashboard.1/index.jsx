import React from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import {
  SalesChart,
} from './components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
});

function Dashboard (props) {
  const { classes } = props;

  return (
    <DashboardLayout title="Dashboard">
      <div className={classes.root}>
          <SalesChart className={classes.item} />
      </div>
    </DashboardLayout>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
