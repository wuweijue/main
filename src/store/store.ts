import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './headerReducer';


const store = configureStore({
    reducer: {
        header: headerReducer
    },
    middleware: []
})

export default store