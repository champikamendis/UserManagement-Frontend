import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';
import AddUser from '../components/AddUser';
import UsersList from '../components/UsersList';
import EditUser from '../components/EditUser';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={UsersList} path="/" exact={true} />
            <Route component={AddUser} path="/add" />
            <Route component={EditUser} path="/edit/:id" />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
