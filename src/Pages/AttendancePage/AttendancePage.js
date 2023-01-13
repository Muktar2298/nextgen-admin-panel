import React from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import './AttendancePage.scss';

import settingImg from '../../assests/setting.png';
import calendarImg from '../../assests/calender.png';
import docImg from '../../assests/doc.png';
import eyeImg from '../../assests/eye.png';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const AttendancePage = () => {
  return (
    <div className="attendance">
      {/* DASHBOARD-SIDEBAR */}
      <SidebarComponent />

      {/* DASHBOARD-CONTAINER */}
      <div className="attendance-container">
        {/* DASHBOARD-NAVBAR */}
        <NavbarComponent />

        {/* TOP */}
        <div className="attendance-top-part">
          <div className="attendance-title">
            <h1>Attendance</h1>
          </div>

          <div className="download-report">
            <button>Download Report</button>
            <img src={settingImg} alt="" />
          </div>
        </div>

        {/* MIDDLE */}
        <div className="attendance-middle-part">
          <div className="m1 middle-div">
            <p>Jan 03, 2023</p>
            <img src={calendarImg} alt="" />
          </div>

          <div className="m1 middle-div">
            <p>Department</p>
            {/* <img /> */}
            <p />
          </div>

          <div className="m1 middle-div">
            <p>Attendance</p>
            <MdOutlineKeyboardArrowDown className="icon" />
          </div>

          <div className="m1 middle-div">
            <p>Present</p>
            <MdOutlineKeyboardArrowDown className="icon" />
          </div>

          <div className="m1 middle-div">
            <p>Check In</p>
            <p />
          </div>

          <div className="m1 middle-div">
            <p>Location</p>
            <p />
          </div>

          <div className="m1 middle-div">
            <p>Designation</p>
            <MdOutlineKeyboardArrowDown className="icon" />
          </div>

          <div className="m1 middle-div">
            <p>Department</p>
            <MdOutlineKeyboardArrowDown className="icon" />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="attendance-bottom-part">
          <div className="bottom-part-container">

            {/* TABLE */}
            <table>
              {/* T-HEAD */}
              <tr>
                {/* TABLE-HEAD */}
                <th>
                  {' '}
                  <input type="checkbox" />
                  Employee Name
                </th>
                <th>Department</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Remark</th>
                <th>Hours</th>
                <th>Overtime</th>
                <th>Action</th>
              </tr>

              {/* row-1 */}
              <tr>
                <td>
                  <p></p> <span>Jahid Hasan</span>
                </td>
                <td>HR & Admin</td>
                <td>
                  <p className="check-one">09:45 am</p>
                </td>
                <td>
                  <p className="check-two">05:35 am</p>
                </td>
                <td />
                <td />
                <td />
                <td>
                  <img className="eye" src={eyeImg} alt="" />
                </td>
              </tr>

              {/* row-2 */}
              <tr>
                <td>
                  <input type="checkbox" /> Jahid Hasan
                </td>

                <td>HR & Admin</td>
                <td>
                  <p className="check-two">10:45 am</p>
                </td>
                <td>
                  <p className="check-one">06:05 am</p>
                </td>
                <td>
                  <img src={docImg} alt="" />
                </td>
                <td />
                <td />
                <td>
                  <img className="eye" src={eyeImg} alt="" />
                </td>
              </tr>

              {/* row-3 */}
              <tr>
                <td>
                  <p></p> <span>Jahid Hasan</span>
                </td>
                <td>HR & Admin</td>

                <td>
                  <p className="check-one">09:45 am</p>
                </td>
                <td>
                  <p className="check-two">05:35 am</p>
                </td>
                <td />
                <td />
                <td />
                <td>
                  <img className="eye" src={eyeImg} alt="" />
                </td>
              </tr>

              {/* row-4 */}
              <tr>
                <td>
                  <input type="checkbox" /> Jahid Hasan
                </td>
                <td>HR & Admin</td>

                <td>
                  <p className="check-two">10:45 am</p>
                </td>
                <td>
                  <p className="check-one">06:05 am</p>
                </td>
                <td>
                  <img src={docImg} alt="" />
                </td>
                <td />
                <td />
                <td>
                  <img className="eye" src={eyeImg} alt="" />
                </td>
              </tr>
            </table>

            {/* PAGINATION */}
            <div className="pagination-container">
              <div />
              <div className="pagination">
                <ul>
                  <li>
                    <MdOutlineKeyboardArrowLeft className='arrow-icon'  />
                  </li>
                  <li className='page-active'>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>
                    <MdOutlineKeyboardArrowRight className='arrow-icon' />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
