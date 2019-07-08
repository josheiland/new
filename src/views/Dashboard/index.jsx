import React from 'react';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
  item: {
    height: '100%'
  }
});

function Dashboard (props) {
  const { classes } = props;

  return (
    <DashboardLayout title="Navigace">
      <div className={classes.root}>
          
      </div>
    </DashboardLayout>
  );
}

export default withStyles(styles)(Dashboard);
