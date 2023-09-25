import React from 'react';
import './header.less';
import { useLocation, useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';
import { CheckOutlined, LeftOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectLanguage, headerStateType, Language, switchMode } from '@store/headerReducer';
import { Reducers } from '@store/store'
import { useTranslation } from 'react-i18next';
import { Span } from 'useTranslate';
import classnames from 'classnames';

type routeType = {
    path: any;
    title?: string;
    icon?: string;
}

const languageMenu = [
    {
        key: 'zh-CN',
        label: '中文',
        title: '中'
    },
    {
        key: 'en-US',
        label: 'English',
        title: 'En'
    }
]

const Control = () => {
    const dispatch = useDispatch();
    const { language, mode } = useSelector(
        (state: Reducers) => state.header,
    );
    const { i18n } = useTranslation();
    const handleSelectLanguage = (key: Language) => {
        if (language === key) return
        dispatch(selectLanguage(key));
        i18n.changeLanguage(key)
    }
    return <div className="header-control">
        <div className='modeControl'>
            <div className='round-wrapper' onClick={() => dispatch(switchMode(mode === 'light' ? 'dark' : 'light'))}>
                {mode === 'light' ? <i className='iconfont icon-light'></i> : <i className='iconfont icon-dark'></i>}
            </div>
        </div>
        <div className='languageControl'>
            <Dropdown
                dropdownRender={() => {
                    return <div className={'languageControl-dropdown ' + mode}>
                        {
                            languageMenu.map(item => {
                                return <button key={item.label}
                                    onClick={() => {
                                        handleSelectLanguage((item.key as Language))
                                    }}
                                    className='list-item'>
                                    <CheckOutlined style={{ visibility: item.key === language ? 'visible' : 'hidden' }} />
                                    <span className='list-item-label'>{item.label}</span>
                                </button>
                            })
                        }
                    </div>
                }}
            >
                <div className='round-wrapper'>
                    {/* <i className='iconfont icon-languageControl'></i> */}
                    {language === 'en-US' ? 'En' : '中'}
                </div>
            </Dropdown>
        </div>
    </div>
}

const routes = [
    {
        path: '/library',
        title: '文库',
        icon: 'icon-library'
    },
    {
        path: '/components',
        title: '组件',
        icon: 'icon-components'
    },
]

const Search = () => {
    return <div className="header-search">
        <i className='iconfont icon-search'></i>
        <Span>搜索</Span>
    </div>
}

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleSelect = (item: routeType) => {
        if (item.path === location.pathname) {
            return
        }
        navigate(item.path)
    }

    return <div className="header">
        <div className="left">
            <div className="title">
                <div className='logo'></div>
                <div className="title-span">Jade.WWJ</div>
            </div>
            <div className="routes">
                <div className='round-wrapper back' onClick={()=>{
                    let pathname = location.pathname;
                    let newPath = pathname.split('/').slice(0, -1).join('/')
                    navigate(newPath)
                }}>
                    <LeftOutlined />
                </div>
                {
                    routes.map(item => {
                        return <button onClick={() => handleSelect(item)} className={classnames("header-item", {
                            "selected": item.path === location.pathname
                        })} key={item.path}>
                            {item.title}
                        </button>
                    })
                }
            </div>
        </div>

        <div className="right">
            <Search />
            <Control />
        </div>

    </div>
}

export default Header