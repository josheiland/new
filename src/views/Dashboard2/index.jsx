import React from 'react';

// Material helpers
import { withStyles } from '@material-ui/core';
import { Dashboard as DashboardLayout } from 'layouts';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: '#abcf42',
  },
  item: {
    height: '100%',
  }
});

function Dashboard (props) {
  const { classes } = props;

  return (
    <DashboardLayout title="Diagnostika">
      <div className={classes.root}>
          
      </div>
    </DashboardLayout>
  );
}

export default withStyles(styles)(Dashboard);
