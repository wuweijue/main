import { configureStore, Reducer, Store } from '@reduxjs/toolkit';
import headerReducer, { headerStateType } from './headerReducer';
import bookReducer, {Books} from './bookReducer';

export type Reducers = {
    header: headerStateType,
    library: Books 
}

const store: Store = configureStore({
    reducer: ({
        header: headerReducer,
        library: bookReducer
    }),
    // middleware: []Reducers
})

export default store