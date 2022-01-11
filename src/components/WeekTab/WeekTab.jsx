import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import WeekCard from './WeekCard'
import Detail from './Detail'
export default function WeekTab() {
  const weather = useSelector(state => state.weatherReducer.weather);
  const data= weather?.daily? weather?.daily: [];
  const [itemActive, setItemActive] = useState(0)
  const handleActive=(index)=>{  
    setItemActive(index)
  }
  console.log(data)
  return (
    <>
      <div className="row">
        <div className="d-flex flex-wrap">
         {data.map((item, index)=><WeekCard index={index} key={item.dt} item={item} onActive={handleActive} itemActive={itemActive} />)}
        </div>
      </div>
      <Detail itemActive={itemActive}/>
    </>
  )
}
