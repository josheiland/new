import React from 'react';

// Externals
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Divider, Typography } from '@material-ui/core';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  company: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 0.5
  }
});

function Footer(props) {
  const { classes, className } = props;

  const rootClassName = classNames(classes.root, className);

  return (
    <div className={rootClassName}>
      <Divider />
      <Typography
        className={classes.company}
        variant="body1"
      >
        &copy; Vitrix Software 2019 by Josh Eiland
        </Typography>
      <Typography variant="caption">
        To be filled with buttons.
        </Typography>
    </div>
  );
}

export default withStyles(styles)(Footer);
