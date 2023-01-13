import React from 'react';

import './Widget.scss';
import usersImg from '../../assests/users.png';
import avatar1 from '../../assests/avatar-1.png';
import avatar2 from '../../assests/avatar-2.png';
import avatar3 from '../../assests/avatar-3.png';
import avatar4 from '../../assests/avatar-4.png';
import avatar5 from '../../assests/avatar-5.png';
import plusIcon from '../../assests/plus-icon.png';

const Widget = ({ type }) => {
  let data;
  switch (type) {
    case 'employee':
      data = {
        title: 'Total Employees',
        number: 450,
      };
      break;
    case 'attend':
      data = {
        title: 'Attend Today',
        number: 420,
      };
      break;
    case 'leave':
      data = {
        title: 'Employees on Leave',
        number: 15,
      };
      break;
    case 'expense':
      data = {
        title: 'New Expense Request',
        number: 5,
      };
      break;

    default:
      break;
  }
  return (
    <div className="widget">
      {/* TOP */}
      <div className="top">
        <img src={usersImg} alt="" />
        <span className="title">{data.title}</span>
      </div>

      {/* MIDDLE */}
      <div className="middle">
        <h1 className="counter">{data.number}</h1>
        <button className="btn">View All</button>
      </div>
      <hr />

      {/* BOTTOM */}
      <div className="bottom">
        <img src={avatar1} alt="avatar1" />
        <img src={avatar2} alt="avatar2" />
        <img src={avatar3} alt="avatar3" />
        <img src={avatar4} alt="avatar4" />
        <img src={avatar5} alt="avatar5" />
        <img src={plusIcon} alt="plusIcon" />
      </div>
    </div>
  );
};

export default Widget;
