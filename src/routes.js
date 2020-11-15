import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Layout from './hoc/layout';
import PreLoader from './components/PreLoader'


const Index = Loadable({
    loader: () => import('./pages/Index'),
    loading: PreLoader,
});





const Routes = (props) => {
    return (
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Index}/>
                </Switch>
            </BrowserRouter>
        </Layout>
    )
}

export default Routes;