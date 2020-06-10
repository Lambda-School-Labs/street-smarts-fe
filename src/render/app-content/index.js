import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import CarDetails from '../../components/details';
import Home from '../../components/home';
import CostToOwn from '../../components/5-year-cost';
import Compare from '../../components/compare';

const AppContent = () => {
  let location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter location={location} key={location.pathname}> 
            <Switch>
                <Route exact path = '/' component = {Home} />
                <Route exact path='/details/:make/:model/:id' component={CarDetails} />
                <Route exact path='/details/:make/:model/:id/cost-to-own' component = {CostToOwn} />
                <Route exact path='/compare/:id' component={Compare} />
                <Route exact path='/compare/:id/to/:carID' component={Compare}/>
            </Switch>
      </AnimatePresence>
    )
};

export default AppContent;
