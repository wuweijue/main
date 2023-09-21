import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Language = 'zh-CN' | 'en-US';


export type headerStateType = {
    language: Language,
    mode: 'light' | 'dark'
}

const initialState: headerStateType = {
    language: (navigator.language as Language) || 'en-US',
    mode: 'dark'
}

const headerReducer = createSlice({
    name: 'header',
    initialState,
    reducers: {
        selectLanguage: (state, action: PayloadAction<headerStateType["language"]>)=>{
            return {
                ...state,
                language: action.payload
            }
        },
        switchMode: (state, action: PayloadAction<headerStateType["mode"]>)=>{
            return {
                ...state,
                mode: action.payload
            }
        }
    }
})

export const { selectLanguage, switchMode } = headerReducer.actions; 
export const slice = (state: any) => state.headerReducer; 

export default headerReducer.reducer