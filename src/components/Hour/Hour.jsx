import moment from 'moment';
import React from 'react';
import Chart from './Chart';
import {useSelector} from 'react-redux';

export default function Hour() {
  const weatherReducer = useSelector(state => state.weatherReducer);
  const data = weatherReducer?.weather? weatherReducer?.weather?.hourly: [];
  const hour= data.map((item,index)=>moment.unix(item.dt).format('LT').toLowerCase())
  const temp= data.map((item)=>item.temp)
  const tempFeelLike= data.map((item)=>item.feels_like)

  return (
    <div className="bg-white p-2 mt-2 rounded-3">
      <Chart hour={hour} temp={temp} tempFeelLike={tempFeelLike}  />
    </div>

  )
}
