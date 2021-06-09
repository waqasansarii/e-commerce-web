import {configureStore} from '@reduxjs/toolkit'
import {cardReducer} from '../GlobalState/CreateSlice'


export const store = configureStore({
    reducer:{
        cardReducer
    }
})

