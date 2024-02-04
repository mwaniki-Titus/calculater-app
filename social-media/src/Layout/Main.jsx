import { Routes, Route } from 'react-router-dom';
import './Main.scss';
import MainContent from './MainContent';
import RightBar from './RightBar';
import SideBar from './SideBar';
import Friends from '../Pages/Friends';

import Timeline from '../Pages/Timeline';
import Photos from '../Pages/Photos';
import Profile from '../Pages/Profile';
import Events from '../Pages/Events';
import Groupsx from '../Pages/Groupsx';
import Videos from '../Pages/Videos';
import Notifications from '../Pages/Notification';

const Main = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="content">
        <RightBar />
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path='/groupsx' element={<Groupsx/>}/>
          <Route path='/timeline' element={<Timeline/>}/>
          <Route path='/friends' element={<Friends/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/photos' element={<Photos/>}/>
          <Route path='/videos' element={<Videos/>}/>
          {/* <Route path='/login' element={<Login/>}/>
           */}

        </Routes>
      </div>
    </div>
  );
};

export default Main;
