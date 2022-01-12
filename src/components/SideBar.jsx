import moment from 'moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import clouds from '../images/clouds.png';

const Sidebar = ({onSearch}) => {
  const currentWeather = useSelector(state => state.weatherReducer.weather?.current);
  const name = useSelector(state => state.weatherReducer.weather?.name);
  const [keySearch, setKeySearch] = useState('');
  const handleSearch=(event)=>{
    if (event.key === 'Enter') {
      event.preventDefault()
      onSearch(keySearch)
    }
  }

  return (
    <div className="wrap">
      <form className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          title="Press city name then Enter"
          value={keySearch}
          onChange={event => {setKeySearch(event.target.value) }}
          onKeyPress={handleSearch }
        />
      </form>
      <img src={clouds} alt="icon" className="img-fluid" />
      <div className="fs-2 fw-bold lh-sm text-dack">{name}</div>
      <div className="fs-1 fw-bold">{currentWeather?.temp}</div>
      <div className="fs-5 lh-lg">
        { moment.unix(currentWeather?.dt).format('dddd, LT')}
      </div>
      <div className="fs-6 lh-base text-capitalize text-muted mb-3">
        {currentWeather?.weather[0]?.description} <br />
        Clouds {currentWeather?.clouds}
      </div>
      <div className="position-relative d-flex justify-content-center align-items-center">
        <div className="position-absolute">
          <div className="fs-3 fw-bold text-white">{name}</div>
        </div>
        <img
          src="https://us.123rf.com/450wm/macrovector/macrovector1805/macrovector180500152/100615959-weather-forecast-web-page-with-heavy-rain-on-dark-cloudy-day-with-people-under-umbrellas-vector-illu.jpg?ver=6"
          className="img-fluid rounded "
          alt='avatar'
        />
      </div>
    </div>
  );
}

export default Sidebar;
