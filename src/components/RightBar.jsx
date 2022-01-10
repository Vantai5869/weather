import React from 'react';
import Avatar from './Avatar';
import Tab from './Tab'
import Todaytab from './TodayTab/TodayTab';
import WeekTab from './WeekTab/WeekTab';
import Hour from './Hour/Hour'
const Rightbar = () => {
  return (
    <div className="wrap">
      <div className="d-flex align-item-center justify-content-between">
        <Tab />
        <Avatar />
      </div>
      {/* <Todaytab/> */}
      {/* <WeekTab/> */}
      <Hour/>
    </div>

  );
}

export default Rightbar;
