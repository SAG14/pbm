import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, {history} from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Container from './Container';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

render((
    <MuiThemeProvider>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Container/>
                </div>
            </ConnectedRouter>
        </Provider>
    </MuiThemeProvider>
), document.getElementById('root'));
registerServiceWorker();
