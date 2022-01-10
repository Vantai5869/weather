import React from 'react';
import Rightbar from './components/RightBar';
import Sidebar from './components/SideBar';

function App() {
  return (
    <div className="res container position-absolute overflow-hidden" style={{height:'90vh'}}>
      <div className="row">
        <div className="col-md-3 col-sm-12 bg-white p-4">
          <Sidebar/>
        </div>
        <div class=" res col-md-9 col-sm-12 p-4 overflow-auto right-bar-wapper">
          <Rightbar/>
        </div>
       
      </div>
    </div>
  );
}

export default App;
