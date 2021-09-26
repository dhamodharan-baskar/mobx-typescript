import React from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import routes from './configs/routes';
import { Header } from './styles/styledComponents';
import Page from './pages/page/Page';
import { Page1Store } from './store/Page1Store'
import { Page2Store } from './store/Page2Store'
import { Page3Store } from './store/Page3Store'
import { Page4Store } from './store/Page4Store'

const Application: React.FunctionComponent<{}> = props => {
    return (
        <div>
            <BrowserRouter>
                
                <Header>
                    Header
                    <div>Overall: </div>
                    <div>Completed: </div>
                </Header>
                <Page />
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(props: RouteComponentProps<any>) => (
                                    <route.component
                                        name={route.name} 
                                        {...props}
                                        {...route.props}
                                        Page1Store={Page1Store}
                                        Page2Store={Page2Store}
                                        Page3Store={Page3Store}
                                        Page4Store={Page4Store}
                                    />
                                )}
                            />
                        );
                    })}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Application;