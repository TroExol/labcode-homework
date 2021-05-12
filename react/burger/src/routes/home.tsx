import React from 'react';
import { IRouterObject } from './index';

const index: IRouterObject = {
    name: 'home/index',
    path: '/',
    exact: true,
    renderFn: (): JSX.Element => {
        return <h1>Home</h1>;
    },
};

export default [index];
