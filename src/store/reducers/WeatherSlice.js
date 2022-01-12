import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {APPID} from '../../config'
export const getWeatherAsync = createAsyncThunk(
  'weather/weatherFetch',
  async (province, { rejectWithValue })=>{
    try {
      const location= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${province}&units=metric&APPID=${APPID}`);
        const {lat, lon} =location.data.coord
        const resGetAsync= await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&APPID=e5f1e0e91073e047bfd37039ad433153`);
        const weather={...resGetAsync.data, name:location.data.name}
        return  weather
    } catch (err) {
       return rejectWithValue(err.response.data);
    }
        
  }
)

const weatherSlice= createSlice({
    name: 'weather',
    initialState:{
      weather: [],
      loading:false,
      error:false
    },
    reducers:{
    },
    extraReducers:{
      [getWeatherAsync.pending]:(state, action)=>{
        state.loading=true;
      },
      [getWeatherAsync.fulfilled]:(state, action)=>{
        state.loading=false;
        state.error= false;
        state.weather= action.payload;
      },
      [getWeatherAsync.rejected]:(state, action)=>{
        state.error= true;
      }
    }

})

const weatherReducer= weatherSlice.reducer

export default weatherReducer 