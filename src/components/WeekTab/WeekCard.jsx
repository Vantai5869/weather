import moment from 'moment';
import React from 'react';

export default function WeekCard({item, index, onActive, itemActive}) {
  return (
    <div
      className="col-xs-12 col-md-3 col-sm-6 p-1"
      style={{ cursor: "pointer" }}
      onClick={()=>onActive(index)}
    >
      <div className= {itemActive===index?"bg-info p-2 rounded-3 h-100" : "bg-white p-2 rounded-3 h-100" }  >
        <p className="fs-6 text-black-50">
          { moment.unix(item.dt).format('ddd, DD/MM')}
        </p>
        <div className="text-center">
          <img
            src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
            className="img-fluid"
            alt='card'
          />
          <p className="fs-6 text-muted fw-bold">
          {
            Math.round(item.temp.min)+"° - "+Math.round(item.temp.max)
          }
          </p>
        </div>
      </div>
    </div>
  )
}
