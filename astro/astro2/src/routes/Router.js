import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import MatchListPage from '../pages/MatchListPage/MatchListPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Header from '../components/Header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <ProfilePage />
        </Route>
        <Route exact path="/matchlist">
          <MatchListPage />
        </Route>
        <Route>
          <ErrorPage exact path="/error" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
