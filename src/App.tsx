import React, { Profiler, StrictMode } from 'react';
import Router from './router/Router';
import { Provider } from 'react-redux';
import store from './store/store';
import './app.less';
import Header from './common/Header';

function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    // 对渲染时间进行汇总或记录...
    console.log(arguments)
}

const App = () => {
    return <StrictMode>
        <Profiler id="App" onRender={onRender}>
            <div className="app">
                <Provider store={store}>           
                    <Router>
                        <Header />
                    </Router>
                </Provider>
            </div>
        </Profiler>
    </StrictMode >
}

export default App;