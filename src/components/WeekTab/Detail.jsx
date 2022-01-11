import React from 'react';
import {useSelector} from 'react-redux';

export default function Detail({itemActive}) {
  const weather = useSelector(state => state.weatherReducer.weather);
  const data= weather?.daily? weather?.daily: [];
  const detail= data.find((item, index)=>index===itemActive)

  return (
    <div className="bg-white my-5 p-2 rounded-3 h-100">
      <p className="fs-5 text-muted">Mon, 10/1</p>
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <p className="fs-6 text-muted">Temp current : {detail?.temp?.day} °C</p>
          <p className="fs-6 text-muted">Temp : {detail?.temp?.min} °C - {detail?.temp?.max} °C</p>
          <p className="fs-6 text-muted">Humidity : {detail?.humidity} %</p>
          <p className="fs-6 text-muted">Wind speed : {detail?.wind_speed} km/h</p>
        </div>
        <div className="col-md-6 col-xs-12">
          <p className="fs-6 text-muted">Sunrise : {detail?.sunrise} am</p>
          <p className="fs-6 text-muted">Sunset : {detail?.sunset} pm</p>
          <p className="fs-6 text-muted">Description : {detail?.weather[0]?.description}n</p>
          <p className="fs-6 text-muted">Atmospheric pressure : {detail?.pressure} hPa</p>
        </div>
      </div>
    </div>

  )
}
