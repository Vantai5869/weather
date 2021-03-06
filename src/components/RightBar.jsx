import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Avatar from './Avatar';
import Hour from './Hour/Hour';
import Tab from './Tab';
import Todaytab from './TodayTab/TodayTab';
import WeekTab from './WeekTab/WeekTab';

const Rightbar = () => {
  const [tab, setTab]= useState('today')
  const weatherReducer = useSelector(state => state.weatherReducer);
  const render= tab==='today'? 
    <Todaytab/>: (tab==='week'? 
    <WeekTab/> : 
    <Hour/> )

  const handleChangeTab=(tabName)=>{
    setTab(tabName)
  }

  return (
    <div className="wrap">
      {
        weatherReducer.error===true && 
        <div className="alert alert-danger" role="alert">Not found city</div>
      }
      <div className="d-flex align-item-center justify-content-between">
        <Tab onChangeTab={handleChangeTab} currentTab={tab} />
        <Avatar />
      </div>
      {render}
    </div>
  );
}

export default Rightbar;
