import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Feed from './pages/Feed';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Feed} />
        </Switch>
    );
}
