import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './library.less';
import { Reducers } from '@store/store';
import { Table, Skeleton } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { setBookList, Book } from '@store/bookReducer';

const columns = [{
    key: 'title',
    title: '标题',
    dataIndex: 'title'
}]

const Library = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { bookList } = useSelector(
        (state: Reducers) => state.library,
    );

    useEffect(() => {
        dispatch(setBookList({ pathname: location.pathname }))
    }, [location.pathname]);
 
    const handleSelect = (item: Book) => {
        if (item.title === location.pathname) {
            return
        }
        navigate(location.pathname + '/' + item.title)
    }

    return <div className="library">
        <Table
            onRow={(record) => {
                return {
                    onClick: () => {
                        handleSelect(record)
                    }
                }
            }}
            sticky={true}
            rowKey={record => record.title}
            columns={columns}
            dataSource={bookList}
            bordered={false}
            pagination={false}
        />
    </div>
}

export default Library