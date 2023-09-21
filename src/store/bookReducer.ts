import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import bookList from '../static/books/bookList';

export type Book = {
    title: string,
    path: string
}

export type Books = {
    bookList: Book[]
}

const initialState: Books = {
    bookList: []
}

const reducer = createSlice({
    name: 'library',
    initialState,
    reducers: {
        setBookList: (state, action: PayloadAction<{ search?: string, pathname: string }>) => {
            const { search, pathname } = action.payload;
            const newBookList: Book[] = [];
            bookList.forEach(item => {
                let res = true
                if (search) {
                    res && new RegExp(search.split('').join('|'), 'g').test(item.title)
                }
                res &&= '/library/' + item.path === pathname;
                if (res) {
                    newBookList.push({
                        title: item.title,
                        path: item.path
                    })
                }
            })
            return {
                ...state,
                bookList: newBookList
            }
        },
    }
})

export const { setBookList } = reducer.actions;

export default reducer.reducer