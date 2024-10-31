import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import UserLayout from './layouts/UserLayout';
import AdminDashboard from './pages/admin/Dashboard';
import UserDashboard from './pages/user/Dashboard';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* Admin Routes */}
        <AdminLayout>
          <Route path="/admin/dashboard" component={AdminDashboard} />
          {/* Add more admin routes here */}
          <Redirect from="/admin" to="/admin/dashboard" />
        </AdminLayout>

        {/* User Routes */}
        <UserLayout>
          <Route path="/user/dashboard" component={UserDashboard} />
          {/* Add more user routes here */}
          <Redirect from="/user" to="/user/dashboard" />
        </UserLayout>

        {/* Fallback */}
        <Redirect from="/" to="/user/dashboard" />
      </Switch>
    </Router>
  );
};

export default Routes;
