import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from '../App'
import Home from '../pages/home'

const rootRouter = () => (
  <div>
    <Switch>
      <Route path="/" render={props => (
        <App>
          <Switch>
            <Route path="/" exact component={ Home }></Route>
            {/* 如果匹配不到任何路径则直接返回至首页 */}
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </App>
      )} />

    </Switch>
  </div>
)
export default rootRouter