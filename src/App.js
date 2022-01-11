import React,{useEffect, useState} from 'react';
import Rightbar from './components/RightBar';
import Sidebar from './components/SideBar';
import { useDispatch } from 'react-redux';
import {getWeatherAsync} from './store/reducers/WeatherSlice';

function App() {
  const dispatch= useDispatch()
  const [keySearch, setkeySearch] = useState('ha noi')
  const handleSearch=(data)=>{
    setkeySearch(data)
  }
  useEffect(() => {
      dispatch(getWeatherAsync(keySearch))
  }, [keySearch])

  return (
    <div className="res container position-absolute overflow-hidden" style={{height:'90vh'}}>
      <div className="row">
        <div className="col-md-3 col-sm-12 bg-white p-4">
          <Sidebar onSearch={handleSearch}/>
        </div>
        <div className=" res col-md-9 col-sm-12 p-4 overflow-auto right-bar-wapper">
          <Rightbar/>
        </div>
       
      </div>
    </div>
  );
}

export default App;
