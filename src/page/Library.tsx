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
    const [state, setState] = useState(false);
    const location = useLocation();
    const { bookList } = useSelector(
        (state: Reducers) => state.library,
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBookList({ pathname: location.pathname }))
        setTimeout(() => {
            setState(true)
        }, 1000)
    }, [location.pathname]);

    const navigate = useNavigate();
    const handleSelect = (item: Book) => {
        if (item.title === location.pathname) {
            return
        }
        navigate(location.pathname + '/' + item.title)
    }

    return <div className="library">
        {
            state ? <Table
                onRow={(record)=>{
                    return {
                        onClick: ()=>{
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
                // scroll={{y:500}}

            /> : <Skeleton active={true} round={true} />
        }
    </div>
}

export default Library