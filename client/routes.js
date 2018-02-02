import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/app';
import About from './components/about';
import Navv from './components/navbar';

export const Routes = () => (
    <Switch>
    	<div>
    		<Navv />
	      <Route exact path='/' component={App} />
	      <Route path='/about' component={About} />
      </div>
    </Switch>
);

export default Routes;