import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Test from './Test';
import Header from './Header';

const rootElement = document.getElementById('root');

const renderApp = () => {
    ReactDom.render(
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/Home" component={Home} />
                <Route path="/Test" component={Test} />
            </div>
        </Router>,
        rootElement
    );
};

if (module.hot) {
    module.hot.accept();
}

renderApp();