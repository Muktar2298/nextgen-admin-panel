import React from 'react';
import './NavbarComponent.scss';

import { BsSearch } from 'react-icons/bs';
import searchImg from '../../assests/search.png';
import profileImg from '../../assests/profile.png';
import notificationImg from '../../assests/notificatioon.png';
import calendarImg from '../../assests/calender.png';

const NavbarComponent = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        {/* SEARCHBAR */}
        <div className="search-bar">
          {/* <BsSearch /> */}
          <img src={searchImg} alt="search-img" />
          <input type="text" placeholder="SEARCH"></input>
        </div>


        {/* OTHERS-ITESMS */}
        <div className="items">
          {/* CALENDER */}
          <div className="item">
            <img className='icon' src={calendarImg} alt="calender-img" />
          </div>
          {/* NOTIFICATION */}
          <div className="item">
            <img className='icon' src={notificationImg} alt="notification-img" />
            <div className="notification-counter">10</div>
          </div>
          {/* PROFILE */}
          <div className="item">
            <img className=' profile' src={profileImg} alt="profile-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
