import React from 'react';
import {useSelector} from 'react-redux';
import Svg1 from './svg/Svg1';
import Svg2 from './svg/Svg2';
import Svg3 from './svg/Svg3';
import Svg4 from './svg/Svg4';
import Svg5 from './svg/Svg5';
import Svg6 from './svg/Svg6';
import Svg7 from './svg/Svg7';

const Todaytab = () => {
  const currentWeather = useSelector(state => state.weatherReducer.weather?.current);

  return (
    <div className="row">
      <div className="d-flex flex-wrap">
        <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">UV index</p>
              <div className="text-center">
                <Svg1/>
                <p className="fs-3 text-muted fw-bold">{currentWeather?.uvi}</p>
              </div>
          </div>
        </div>
        <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Wind Status </p>
            <div className="text-center">
              <Svg2/>
              <p className="fs-3 text-muted fw-bold text-center">{currentWeather?.wind_speed} km/h</p>
            </div>
          </div>
        </div>
        <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Sunrise &amp; Sunset</p>
            <p className="fs-4 text-muted fw-bold ">
              <Svg3/>{" "}
              {currentWeather?.sunrise &&new Date(currentWeather?.sunrise).toLocaleString(`en-Us`, {
                hour : "numeric",
                minute: "2-digit"
              })}
            </p>
            <p className="fs-4 text-muted fw-bold ">
              <Svg4/>{" "}
              {currentWeather?.sunset &&new Date(currentWeather?.sunset).toLocaleString(`en-Us`, {
                hour : "numeric",
                minute: "2-digit"
              })}
            </p>
          </div>
        </div>
        <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50 "> Humidity </p>
            <div className="text-center">
              <Svg5/>
              <p className="fs-3 text-muted fw-bold text-center">{currentWeather?.humidity} %</p>
            </div>
          </div>
        </div>
        <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Visibility </p>
            <div className="text-center">
              <Svg6/>
              <p className="fs-3 text-muted fw-bold text-center">{currentWeather?.visibility} km</p>
            </div>
          </div>
        </div>
        <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Pressure </p>
            <div className="text-center">
              <Svg7/>
              <p className="fs-3 text-muted fw-bold text-center">{currentWeather?.pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default Todaytab;
