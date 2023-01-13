import DashboardPage from './Pages/DashboardPage/DashboardPage';

import { Routes, Route, Link } from 'react-router-dom';
import SignupPage from './Pages/SignupPage/SignupPage';
import SigninPage from './Pages/SigninPage/SigninPage';
import ExployeesPage from './Pages/ExployeesPage/ExployeesPage';
import SinglePage from './Pages/SinglePage/SinglePage';
import NewPage from './Pages/NewPage/NewPage';
import AttendancePage from './Pages/AttendancePage/AttendancePage';

import './App.scss';

//IMPORTED ICONS
import { RiDashboardFill } from 'react-icons/ri';
import { BiCategoryAlt } from 'react-icons/bi';
import { IoLogOutSharp } from 'react-icons/io5';
import { AiFillSetting } from 'react-icons/ai';
import { MdTimeToLeave } from 'react-icons/md';
import { GiExpense } from 'react-icons/gi';
import { HiUsers } from 'react-icons/hi';
import { FaHospitalUser } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';
import profile from './assests/profile.png';
import { useState } from 'react';

function App() {
  const [activeLinkD, setActiveLinkD] = useState(false);
  const [activeLinkA, setActiveLinkA] = useState(false);
  const [activeLinkE, setActiveLinkE] = useState(false);
  const [activeLinkS, setActiveLinkS] = useState(false);
  const [activeLinkP, setActiveLinkP] = useState(false);

  return (
    <div className="App">
      <div className="app-top">
        <Routes>
          {/* ::::::::::DASHBOARD-PAGE-ROUTES::::::::*/}
          <Route path="/">
            {/* ==DashboardPage.js== */}
            <Route index element={<DashboardPage />}></Route>
            {/* ==Signup.js== */}
            <Route path="signup" element={<SignupPage />} />
            {/* ==Signin.js== */}
            <Route path="signin" element={<SigninPage />} />

            {/* ======ATTENDANCES-PAGE-ROUTES====== */}
            <Route path="attendance">
              {/*  EmployeesPage.js*/}
              <Route index element={<AttendancePage />} />
              {/*  SinglePage.js*/}
              <Route path=":attendanceId" element={<SinglePage />} />
              {/*  NewPage.js*/}
              <Route path="new" element={<NewPage />} />
            </Route>

            {/* ======EMPLOYEES-PAGE-ROUTES====== */}
            <Route path="employees">
              {/*  EmployeesPage.js*/}
              <Route index element={<ExployeesPage />} />
              {/*  SinglePage.js*/}
              <Route path=":employeeId" element={<SinglePage />} />
              {/*  NewPage.js*/}
              <Route path="new" element={<NewPage />} />
            </Route>
          </Route>
        </Routes>
      </div>

      {/* BOTTOM-BAR */}
      <div className="bottomBar">
        <nav className="nav">
          {/* DASHBOARD */}
          <Link
            to="/"
            className={
              activeLinkD === true
                ? 'nav__link nav__link--active'
                : 'nav__link nav__link--unactive'
            }
            onClick={() => setActiveLinkD(true) && setActiveLinkA(false)}
          >
            <RiDashboardFill className="nav__icon" />
            <span className="nav__text">Dashboard</span>
          </Link>
          {/* ATTENDANCE */}
          <Link
            to="/attendance"
            className={
              activeLinkA === true
                ? 'nav__link nav__link--active'
                : 'nav__link nav__link--unactive'
            }
            onClick={() => setActiveLinkA(true)}
          >
            <FaHospitalUser className="nav__icon" />
            <span className="nav__text">Attendance</span>
          </Link>
          {/* EMPLOYEES */}
          <Link
            to="/employee"
            className={
              activeLinkE === true
                ? 'nav__link nav__link--active'
                : 'nav__link nav__link--unactive'
            }
            onClick={() => setActiveLinkE(true)}
          >
            <HiUsers className="nav__icon" />
            <span className="nav__text">Employees</span>
          </Link>
          {/* SETTINGS */}
          <Link
            to="/"
            className={
              activeLinkS === true
                ? 'nav__link nav__link--active'
                : 'nav__link nav__link--unactive'
            }
            onClick={() => setActiveLinkS(true)}
          >
            <AiFillSetting className="nav__icon" />
            <span className="nav__text">Settings</span>
          </Link>
          {/* PROFILE */}
          <Link
            to="/profile"
            className={
              activeLinkP === true
                ? 'nav__link nav__link--active'
                : 'nav__link nav__link--unactive'
            }
            onClick={() => setActiveLinkP(true)}
          >
            <img src={profile} alt="" className="bottom__profile" />
            <span className="nav__text">Profile</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default App;
