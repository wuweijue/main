import React, { Profiler, StrictMode } from 'react';
import Router from './router/Router';
import { Provider } from 'react-redux';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import en from '../language/en.json';
import store from './store/store';
import PrimaryRouter from './router/Router';
import './app.less';

function onRender() {
    // 对渲染时间进行汇总或记录...
    // console.log(arguments)
}

// const browserLanguage = navigator.language || 'zh-CN';
const browserLanguage = 'en-us';

i18n
    .use(XHR)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
        },
        fallbackLng: browserLanguage, // 默认语言  
    });

const App = () => {
    return <StrictMode>
        <Profiler id="App" onRender={onRender}>
            <I18nextProvider i18n={i18n}>
                <div className="app">
                    <Provider store={store}>
                        <PrimaryRouter />
                    </Provider>
                </div>
            </I18nextProvider>
        </Profiler>
    </StrictMode >
}

export default App;