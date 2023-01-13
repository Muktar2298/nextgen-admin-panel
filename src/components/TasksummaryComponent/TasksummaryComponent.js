import React from 'react';
import './TasksummaryComponent.scss';
const TasksummaryComponent = () => {
  return (
    <>
  
      <div className="tasksummary">
        <p className="total-task">Total Task</p>
        <h1
          style={{
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '28px',
            color: '#1c1c1c',
            marginBottom: '0.5rem',
            marginTop: '0.5rem',
          }}
        >
          112
        </h1>

        {/* PROGRASSBAR-1 */}
        <div className="complete-progressbar">
          <p className="completed-task">Completed</p>
          <div className="container">
            <div className="progress-bar">
              <p className="progress-bar-title">
                <span style={{ color: 'rgba(0, 0, 0, 0.2)' }}>50/</span>
                <span>80</span>
              </p>
            </div>
          </div>
        </div>

        {/* PROGRASSBAR-2 */}
        <div className="progress-progressbar">
          <p className="completed-task">In Progress</p>
          <div className="container">
            <div className="progress-bar">
              <p className="progress-bar-title">
                <span>15/</span>
                <span>112</span>
              </p>
            </div>
          </div>
        </div>

        {/* PROGRASSBAR-3 */}
        <div className="pending-progressbar">
          <p className="completed-task">Pending</p>
          <div className="container">
            <div className="progress-bar">
              <p className="progress-bar-title">
                <span>30/</span>
                <span>80</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TasksummaryComponent;
