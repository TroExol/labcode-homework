import React from 'react';
import { Switch, Route } from 'react-router-dom';
import homeRoutes from './home';
import basketRoutes from './basket';

export interface IRouterObject {
    name: string;
    path: string;
    exact: boolean;
    renderFn: () => JSX.Element;
}

export const allRoutes = [...homeRoutes, ...basketRoutes];

const Routes = (): JSX.Element => {
    return (
        <Switch>
            {allRoutes.map(({ name, path, exact, renderFn }) => (
                <Route key={name} path={path} exact={exact} render={renderFn} />
            ))}
            <Route render={() => <h1>Not Found</h1>} />
        </Switch>
    );
};

export default Routes;
