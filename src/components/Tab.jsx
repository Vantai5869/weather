import React from 'react';

const Tab = () => {
    return (
    <ul className="nav d-flex align-item-center justify-content-start fs-5 fw-bold">
      <li
        role="button"
        className="nav-item m-2 border-bottom border-3 border-dark"
      >
        Today
      </li>
      <li role="button" className="nav-item m-2 text-muted">
        Week
      </li>
      <li role="button" className="nav-item m-2 text-muted">
        Hour
      </li>
    </ul>
    );
}

export default Tab;
