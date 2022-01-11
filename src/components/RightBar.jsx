import React,{useState} from 'react';
import Avatar from './Avatar';
import Tab from './Tab'
import Todaytab from './TodayTab/TodayTab';
import WeekTab from './WeekTab/WeekTab';
import Hour from './Hour/Hour'
const Rightbar = () => {
  const [tab, setTab]= useState('today')
  
  const render= tab==='today'? 
    <Todaytab/>: (tab==='week'? 
    <WeekTab/> : 
    <Hour/> )

  const handleChangeTab=(tabName)=>{
    setTab(tabName)
  }
  return (
    <div className="wrap">
      <div className="d-flex align-item-center justify-content-between">
        <Tab onChangeTab={handleChangeTab} currentTab={tab} />
        <Avatar />
      </div>
      {render}
    </div>

  );
}

export default Rightbar;
