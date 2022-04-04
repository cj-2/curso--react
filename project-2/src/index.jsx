import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

import { App } from './templates/App/';
import { Abc } from './templates/Abc/';
import { Page404 } from './templates/Page404';

import { Menu } from './components/Menu';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/abc/:slug?" component={Abc} exact />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
