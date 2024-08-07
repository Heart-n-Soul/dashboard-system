import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './loginSlice';
import campaignReducer from './campaignSlice';


export const store = configureStore({
    reducer: {
        login: loginReducer,
        campaigns: campaignReducer,
        
    }
})