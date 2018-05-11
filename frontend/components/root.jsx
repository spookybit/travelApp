import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

const Root = ({store}) => (
  <Provider store = {store}>
    <HashRouter>
      <Switch>
        <div>lol</div>
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;
