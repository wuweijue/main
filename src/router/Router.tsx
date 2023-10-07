import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { ReactPropTypes } from 'react';
import Home from '../page/Home';
import Library from '../page/Library';
import Header from '../common/Header';
import Aside from '../common/Aside';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import { ConfigProvider } from 'antd';
import { headerStateType } from '@store/headerReducer';
import { useSelector } from 'react-redux';
import Reader from '../page/reader/Reader';
import '../qiankun';
import Component from '../page/component';

const languageMap = {
    'zh-CN': zhCN,
    'en-US': enUS
}

const theme = {
    components: {
        Menu: {
            /* here is your component tokens */
            darkItemBg: '#2E2E30',
            darkItemSelectedBg: "#484849",
            borderColor: '#17171A',
            darkSubMenuItemBg: '#2E2E30'
        },
    },
};

const AppRouter = () => {
    const { mode, language } = useSelector(
        (state: { header: headerStateType }) => state.header,
    );
    return <div className={"theme " + mode}>
        <ConfigProvider theme={theme} locale={languageMap[language]}>
            <BrowserRouter>
                <Header />
                <div className="body">
                    <Aside />
                    <Routes>
                        <Route path='/library/:id/:textId' element={<Reader />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/library' element={<Library />}>
                            <Route path=':id' element={<Library />}>
           
                            </Route>
                        </Route>
                        <Route path='/components/:id/' element={<Component />} />
                        {/* <Route path='*' element={<Navigate to='/home' />} /> */}
                    </Routes>
                </div>
            </BrowserRouter>
        </ConfigProvider>
    </div>
}

export default AppRouter