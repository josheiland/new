import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Dashboard from './views/Dashboard'
import Dashboard2 from './views/Dashboard2'
import Dashboard3 from './views/Dashboard3'
import Dashboard4 from './views/Dashboard4'
import Dashboard5 from './views/Dashboard5'

export default function Routes() {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <Route
        component={Dashboard}
        exact
        path="/dashboard"
      />
      <Route
        component={Dashboard2}
        exact
        path="/db-2"
      />
      <Route
        component={Dashboard3}
        exact
        path="/db-3"
      />
      <Route
        component={Dashboard4}
        exact
        path="/db-4"
      />
      <Route
        component={Dashboard5}
        exact
        path="/db-5"
      />
    </Switch>
  );
}
