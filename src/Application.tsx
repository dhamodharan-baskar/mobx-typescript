import React from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import routes from './configs/routes';
import { Header } from './styles/styledComponents';
import Page from './pages/page/Page';

const Application: React.FunctionComponent<{}> = props => {
    return (
        <div>
            <BrowserRouter>
                <Header>Header</Header>
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