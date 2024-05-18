import { configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist";
import {combineReducers} from "@reduxjs/toolkit"
import {navSlice} from "./Slices/navSlice";


const persistConfiguration = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    nav: navSlice.reducer,
})

const persistedReducer = persistReducer(persistConfiguration,reducer)

export const store =  configureStore({
    reducer: persistedReducer
})
export const persistor = persistStore(store)
