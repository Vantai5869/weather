import React from 'react'
import WeekCard from './WeekCard'
import Detail from './Detail'
export default function WeekTab() {
  return (
    <>
    <div className="row">
      <div className="d-flex flex-wrap">
        <WeekCard/>
        <WeekCard/>
        <WeekCard/>
        <WeekCard/>
        <WeekCard/>
        <WeekCard/>
        <WeekCard/>
        <WeekCard/>
      </div>
    </div>
    <Detail/>
    </>

  )
}
