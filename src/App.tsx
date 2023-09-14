import React, { StrictMode } from 'react';
import Router from './router/Router';
import { Provider } from 'react-redux';
import store from './store/store';
import './app.less';

const App = () => {
    return <StrictMode>
        <div className="app">
            <Provider store={store}>
                <Router />
            </Provider>
        </div>
    </StrictMode >
}

export default App;