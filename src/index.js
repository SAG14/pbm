import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, {history} from './store';

import Container from './Container';

import './index.css';
// import App from './App';

// import Login from './components/login/SignIn';
// import Registration from './components/login/Registration';
import registerServiceWorker from './registerServiceWorker';

render((
    // <Router>
    //     <Container>
    //         <Switch>
    //             <Route exact path="/" component={Login}/>
    //             <Route path="/registration" component={Registration}/>
    //             <Route path="/home" component={App}/>
    //         </Switch>
    //     </Container>
    // </Router>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Container/>
            </div>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
