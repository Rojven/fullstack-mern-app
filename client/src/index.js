import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './app/App'

ReactDOM.render(
    <StrictMode>
        <Router>
            <Provider store={store}>
                <App/>
            </Provider> 
        </Router> 
    </StrictMode>,
    document.getElementById('root')
);