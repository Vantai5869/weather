import React from 'react';
import Svg1 from './svg/Svg1';
import Svg2 from './svg/Svg2';
import Svg3 from './svg/Svg3';
import Svg4 from './svg/Svg4';
import Svg5 from './svg/Svg5';
import Svg6 from './svg/Svg6';
import Svg7 from './svg/Svg7';

const Todaytab = () => {
  return (
    <div className="row">
      <div className="d-flex flex-wrap">
        <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">UV index</p>
              <div className="text-center">
                <Svg1/>
                <p className="fs-3 text-muted fw-bold">0.74</p>
              </div>
          </div>
        </div>
        <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Wind Status </p>
            <div className="text-center">
              <Svg2/>
              <p className="fs-3 text-muted fw-bold text-center">9.72 km/h</p>
            </div>
          </div>
        </div>
        <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Sunrise &amp; Sunset</p>
            <p className="fs-4 text-muted fw-bold ">
              <Svg3/>{" "}
              6:35 am
            </p>
            <p className="fs-4 text-muted fw-bold ">
              <Svg4/>{" "}
              5:31 pm
            </p>
          </div>
        </div>
        <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50 "> Humidity </p>
            <div className="text-center">
              <Svg5/>
              <p className="fs-3 text-muted fw-bold text-center">82 %</p>
            </div>
          </div>
        </div>
        <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Visibility </p>
            <div className="text-center">
              <Svg6/>
              <p className="fs-3 text-muted fw-bold text-center">10 km</p>
            </div>
          </div>
        </div>
        <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Pressure </p>
            <div className="text-center">
              <Svg7/>
              <p className="fs-3 text-muted fw-bold text-center">1015 hPa</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default Todaytab;
