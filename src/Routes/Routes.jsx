import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import PrivateLayout from '../Layout/PrivateLayout';
import PublicLayout from '../Layout/PublicLayout';
import Dashboard from '../Pages/Admin/Dashboard';
import Roles from '../Pages/Admin/Roles';
import Ventas from '../Pages/Admin/Ventas';
import Features from '../Pages/Public/Features';
import Index from '../Pages/Public/Index';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={['/dash','/ventas','/roles']}>
                    <PrivateLayout>
                        <Switch>
                            <Route path='/dash'>
                                <Dashboard/>
                            </Route>

                            <Route path='/ventas'>
                                <Ventas/>
                            </Route>

                            <Route path='/roles'>
                                <Roles/>

                            </Route>
                        </Switch>
                    </PrivateLayout>
                </Route>

                <Route path={['/features','/']}>
                    <PublicLayout>
                        <Switch>
                            <Route path='/features'>
                                <Features/>
                            </Route>

                            <Route path='/'>
                                <Index/>
                            </Route>
                        </Switch>
                    </PublicLayout>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
