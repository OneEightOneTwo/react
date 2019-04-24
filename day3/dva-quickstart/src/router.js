import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import HomePage from './routes/HomePage/HomePage';
import ReduxPage from './routes/ReduxPage/ReduxPage';
import StorePage from './routes/StorePage/StorePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/redux" exact component={ReduxPage} />
        <Route path="/store" exact component={StorePage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
