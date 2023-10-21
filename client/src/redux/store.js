import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice';


export default configureStore({
    reducer: {
        countries: countriesReducer,
    }, 
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    }
})