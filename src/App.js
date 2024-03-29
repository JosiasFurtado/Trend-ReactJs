import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import GlobalStyles from './styles/global';

export default function App() {
    return (
        <Router history={history}>
            <GlobalStyles />
            <Routes />
        </Router>
    );
}
