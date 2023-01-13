import React from 'react';
import ChartComponent from '../../components/ChartComponent/ChartComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import TasksummaryComponent from '../../components/TasksummaryComponent/TasksummaryComponent';
import Widget from '../../components/Widget/Widget';

// SCSS-FILE
import './DashboardPage.scss';

const DashboardPage = () => {
  return (
    <div className="dashboard">
      {/* DASHBOARD-SIDEBAR */}
      <SidebarComponent />

      {/* DASHBOARD-CONTAINER */}
      <div className="dashboard-container">
        {/* DASHBOARD-NAVBAR */}
        <NavbarComponent />

        <div className="dashboard-title">
          <h1>Dashboard</h1>
        </div>

        {/* WIDGETS-AREA */}
        <div className="widgets-area">
          <h1>Company Status</h1>

          <div className="widgets">
            <Widget type="employee" />
            <Widget type="attend" />
            <Widget type="leave" />
            <Widget type="expense" />
          </div>
        </div>

        {/* CHARTS-AREA */}
        <div className="charts-area">
          <div className="charts">
            <ChartComponent />
            <TasksummaryComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
