import React, { useState } from 'react';
import './SidebarComponent.scss';

// REACT-ICONS
import { RiDashboardFill } from 'react-icons/ri';
import { BiCategoryAlt } from 'react-icons/bi';
import { IoLogOutSharp } from 'react-icons/io5';
import { AiFillSetting } from 'react-icons/ai';
import { MdTimeToLeave } from 'react-icons/md';
import { GiExpense } from 'react-icons/gi';
import { HiUsers } from 'react-icons/hi';
import { FaHospitalUser } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SidebarComponent = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="sidebar">
      {/* SIDEBAR-TOP-PART */}
      <div className="top">
        <span className="logo">NEXTGEN IT</span>
      </div>

      {/* SIDEBAR-MIDDLE-PART*/}
      <div className="center">
        <ul>
          {/* DASHBOARD */}
          <Link to="/">
            <li>
              <span className="tooltip" />
              <RiDashboardFill />
              <span>Dashboard</span>
            </li>
          </Link>

          {/* ATTENDANCE */}
          <Link to="/attendance">
            <li>
              <span className="tooltip" />

              <FaHospitalUser />
              <span>Attendance</span>
            </li>
          </Link>

          {/* EMPLOYEES */}
          <Link to="/employees">
            <li>
              <span className="tooltip" />

              <HiUsers />
              <span>Employees</span>
            </li>
          </Link>

          {/* LEAVES */}
          <li>
            <span className="tooltip" />

            <MdTimeToLeave />
            <span>Leaves</span>
          </li>

          {/* EXPENSE */}
          <li>
            <span className="tooltip" />

            <GiExpense />
            <span>Expense</span>
          </li>

          {/* DEPARTMENTS */}
          <li>
            <span className="tooltip" />

            <BiCategoryAlt />
            <span>Departments</span>
          </li>

          {/* SETTINGS */}
          <li>
            <span className="tooltip" />

            {/* <span className="down-arrow-icon">
              <SlArrowDown />
            </span> */}
            <AiFillSetting />
            <span>
              Settings
              <SlArrowDown className="down-arrow-icon" />
            </span>
          </li>

          <li className="settings-container">
            <ul className="settings">
              <li>
                <BsDot className='dot' />
                Approval
              </li>
              <li>
                <BsDot className='dot' />
                Leave
              </li>
              <li>
                <BsDot className='dot' />
                Office Setting
              </li>
              <li>
                <BsDot className='dot' />
                My Subscriptions
              </li>
            </ul>
          </li>

          {/* LOGOUT */}
          <li>
            <span className="tooltip" />

            <IoLogOutSharp />
            <span>logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarComponent;
