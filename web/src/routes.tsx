import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import RecoverPassword from './pages/RecoverPassword';
import Success from './pages/Success';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact/>
                <Route path="/app" component={OrphanagesMap}/>
                <Route path="/orphanages/create" component={CreateOrphanage}/>
                <Route path="/orphanages/:id" component={Orphanage}/>
                <Route path="/login" component={Login}/>
                <Route path="/forget-password" component={ForgetPassword}/>
                <Route path="/recover-password" component={RecoverPassword}/>
                <Route path="/success" component={Success}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;