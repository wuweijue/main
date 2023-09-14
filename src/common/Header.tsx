import React from 'react';
import './header.less';
import { NavLink } from 'react-router-dom';

const routes = [
    {
        path: '/home',
        title: '首页'
    }
]

const Header = () => {
    return <div className="header">
        {
            routes.map(item => {
                return <NavLink key={item.path} to={item.path} >{item.title}</NavLink>
            })
        }
    </div>
}

export default Header