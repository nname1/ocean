import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import PrivateRoute from './components/PrivateRoute';

const App= () => (
    <BrowserRouter>
        <PrivateRoute>
            <AppContainer />
        </PrivateRoute>
    </BrowserRouter>
    );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
