import React from 'react';

const Tab = ({onChangeTab, currentTab}) => {
  
    return (
    <ul className="nav d-flex align-item-center justify-content-start fs-5 fw-bold">
      <li
        role="button"
        className={currentTab==='today'? 
        "nav-item m-2 border-bottom border-3 border-dark": "nav-item m-2 text-muted"
        }
        onClick={()=>onChangeTab('today')}
      >
        Today
      </li>
      <li 
        role="button"
        className={currentTab==='week'? 
        "nav-item m-2 border-bottom border-3 border-dark": "nav-item m-2 text-muted"
        }
        onClick={()=>onChangeTab('week')}
      >
        Week
      </li>
      <li 
        role="button" 
        className={currentTab==='hour'? 
        "nav-item m-2 border-bottom border-3 border-dark": "nav-item m-2 text-muted"
        }
        onClick={()=>onChangeTab('hour')}
      >
        Hour
      </li>
    </ul>
    );
}

export default Tab;
