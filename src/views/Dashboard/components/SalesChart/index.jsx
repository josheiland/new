import React from 'react';

// Externals
import classNames from 'classnames';
import { Bar } from 'react-chartjs-2';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
} from 'components';

// Chart configuration
import { data, options } from './chart';

// Component styles
import styles from './styles';

function SalesChart (props) {
    const { classes, className, ...rest } = props;
    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader noDivider>
          <PortletLabel title="Latest sales" />
        </PortletHeader>
        <PortletContent>
          <div className={classes.chartWrapper}>
            <Bar
              data={data}
              options={options}
            />
          </div>
        </PortletContent>
      </Portlet>
    );
}

export default withStyles(styles)(SalesChart);
