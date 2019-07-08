import React from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
    backgroundColor: '#abcf42'
  },
  item: {
    height: '100%'
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

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
