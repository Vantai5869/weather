import React from 'react';
import clouds from '../images/clouds.png'

const Sidebar = () => {
  return (
    <div className="wrap">
      <form className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          data-toggle="tooltip"
          data-placement="top"
          title="Press city name then Enter"
          defaultValue
        />
      </form>
      <img src={clouds} alt="icon" className="img-fluid" />
      <div className="fs-2 fw-bold lh-sm text-dack">Ha Noi</div>
      <div className="fs-1 fw-bold">14°C</div>
      <div className="fs-5 lh-lg">Monday, 9:38 am</div>
      <div className="fs-6 lh-base text-capitalize text-muted mb-3">
        overcast clouds <br />
        Clouds 100%
      </div>
      <div className="position-relative d-flex justify-content-center align-items-center">
        <div className="position-absolute">
          <div className="fs-3 fw-bold text-white">Ha Noi</div>
        </div>
        <img
          src="https://us.123rf.com/450wm/macrovector/macrovector1805/macrovector180500152/100615959-weather-forecast-web-page-with-heavy-rain-on-dark-cloudy-day-with-people-under-umbrellas-vector-illu.jpg?ver=6"
          alt
          className="img-fluid rounded "
        />
      </div>
    </div>
  );
}

export default Sidebar;
