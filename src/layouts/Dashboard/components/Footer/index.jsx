import React from 'react';

// Externals
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';
import { Divider, Typography } from '@material-ui/core';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(4)
  },
  company: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.5)
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
      </Typography>
      <Typography variant="caption">
        To be filled with Widgets.
        </Typography>
    </div>
  );
}

export default withStyles(styles)(Footer);
