import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from './reducers/WeatherSlice';

// store 
const store = configureStore({
    reducer: {
        weatherReducer
    }
})

export default store