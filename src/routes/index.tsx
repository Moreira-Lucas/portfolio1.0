import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../components/Home';
import Projects from '../components/Projects';
import About from '../components/About';

const Routes = () =>{

    return(
        
        <Switch>
        <Route component={ Home } path="/" exact />
        <Route component={ Projects } path="/projects"  />
        <Route component={ About } path="/about"  />
        </Switch>
        


    )


}

export default Routes;