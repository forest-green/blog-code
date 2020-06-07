import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// import App from '../App'
import Home from '../pages/home'

const rootRouter = () => (
  <div>
    <Switch>
      <Route path="/" render={props => (
        <Home>
          <Switch>
            {/* <Route path="/" exact component={ article }></Route> */}
            {/* 如果匹配不到任何路径则直接返回至首页 */}
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Home>
      )} />

    </Switch>
  </div>
)
export default rootRouter