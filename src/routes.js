import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App';
// import Home from './components/Home/Home';
import AddLocation from './containers/AddLocationContainer';
import ListLocations from './containers/ListLocationsContainer';
import LocationDetails from './containers/LocationDetailsContainer';

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={ListLocations} />
			<Route path='/cities' component={ListLocations} />
			<Route path='/cities/:id' component={LocationDetails} />
			<Route path='/add' component={AddLocation} />
    </Route>
  </div>
)
