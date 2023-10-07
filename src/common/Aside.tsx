import React, { useEffect } from 'react';
import { Menu, MenuProps } from 'antd';

import './aside.less';
import { useLocation, useNavigate } from 'react-router-dom';

interface TreeNode {
    label: string;
    key: string;
    children?: TreeNode[];
}

type Tree = TreeNode[];


const MenuList: Tree = [
    {
        label: 'JavaScript', key: 'JavaScript', children: [
            {
                label: '底层设计', key: 'JavaScript-low-level-design'
            },
            {
                label: '手写', key: 'JavaScript-handwritten'
            },
        ]
    }
]

const MenuList2: Tree = [
    {
        label: 'react-dialogbox', key: 'react-dialogbox'
    },
    {
        label: 'vue3-dialogbox', key: 'vue3-dialogbox'
    }
] 

const findFather = (tree: Tree, key: string) => {
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].children) {
            let children = tree[i].children as TreeNode[];
            for (let j = 0; j < children.length; j++) {
                if(children[j].key === key){
                    return tree[i].key
                }
            }
        }
    }
    return 'JavaScript'
}

let lastfirstKey = '';

const Aside = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const thridKey = location.pathname.split('/')[2];
    const secondKey = findFather(MenuList, thridKey);
    const firstKey = location.pathname.split('/')[1];

    useEffect(()=>{
        if(firstKey === 'library' && lastfirstKey !== 'library'){
            const children = MenuList[0].children as TreeNode[];
            navigate('/library/' + children[0].key)
        }
        lastfirstKey = firstKey
    }, [location.pathname])

    return <Menu
        defaultOpenKeys={[secondKey]}
        inlineCollapsed={false}
        selectedKeys={[thridKey]}
        theme='dark'
        className="aside"
        items={firstKey === 'library' ? MenuList : MenuList2}
        mode='inline'
        onSelect={(info) => {
            navigate(`/${firstKey}/` + info.key)
        }}
    />
}

export default Aside


