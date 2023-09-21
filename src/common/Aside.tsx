import React from 'react';
import { Menu, MenuProps } from 'antd';

import './aside.less';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('JavaScript', 'JavaScript', [
        getItem('底层设计', 'JavaScript-low-level-design'),
        getItem('手写', 'JavaScript-handwritten'),
    ])
];

const Aside = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const curKey = location.pathname.split('/')[2];
    return <Menu
        inlineCollapsed={false}
        selectedKeys={[curKey]}
        theme='dark'
        className="aside"
        items={items}
        mode='inline'
        onSelect={(info) => {
            navigate('/library/' + info.key)
        }}
    />
}

export default Aside


