import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const App= () => (
    <BrowserRouter>
        <AppContainer />
    </BrowserRouter>
    );

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
