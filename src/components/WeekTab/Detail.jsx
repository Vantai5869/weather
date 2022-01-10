import React from 'react'

export default function Detail() {
  return (
    <div className="bg-white my-5 p-2 rounded-3 h-100">
      <p className="fs-5 text-muted">Mon, 10/1</p>
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <p className="fs-6 text-muted">Temp current : 16.32 °C</p>
          <p className="fs-6 text-muted">Temp : 15 °C - 16.55 °C</p>
          <p className="fs-6 text-muted">Humidity : 84 %</p>
          <p className="fs-6 text-muted">Wind speed : 11.59 km/h</p>
        </div>
        <div className="col-md-6 col-xs-12">
          <p className="fs-6 text-muted">Sunrise : 6:35 am</p>
          <p className="fs-6 text-muted">Sunset : 5:31 pm</p>
          <p className="fs-6 text-muted">Description : light rain</p>
          <p className="fs-6 text-muted">Atmospheric pressure : 1016 hPa</p>
        </div>
      </div>
    </div>

  )
}
