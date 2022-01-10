import React from 'react'

export default function WeekCard() {
  return (
    <div
    className="col-xs-12 col-md-3 col-sm-6 p-1"
    style={{ cursor: "pointer" }}
    >
      <div className="bg-info p-2 rounded-3 h-100">
        <p className="fs-6 text-black-50">Mon, 10/1</p>
        <div className="text-center">
          <img
            src="https://openweathermap.org/img/w/10d.png"
            alt="icon"
            className="img-fluid"
          />
          <p className="fs-6 text-muted fw-bold">19° - 23°</p>
        </div>
      </div>
    </div>
  )
}
