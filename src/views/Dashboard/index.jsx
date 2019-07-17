import React from 'react';
import Map from '../mapimg.jpg'

// Material helpers
import { withStyles } from '@material-ui/core';
import { Dashboard as DashboardLayout } from 'layouts';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(.4),
  }
});

function Dashboard(props) {
  const { classes } = props;

  return (
    <DashboardLayout title="Navigace">
      <div className={classes.root}>
        <img src={Map} height="450" alt="Map"/>
      </div>
    </DashboardLayout>
  );
}

export default withStyles(styles)(Dashboard);
