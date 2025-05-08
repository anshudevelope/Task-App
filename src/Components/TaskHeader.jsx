import React from "react";
import { FaRegBell } from "react-icons/fa";



const TaskHeader = () => {
    return (
      <header className="task-header">
        <div className="task-header-left">
          Hello, <span className="highlight">superAdmin</span>
        </div>
        <div className="task-header-right">
          <span className="bell"><FaRegBell /></span>
          <div className="profile-info">
            <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="Avatar" className="avatar" />
            <div>
              <div className="name">superAdmin</div>
              <div className="settings">Account Settings</div>
            </div>
          </div>
        </div>
      </header>
    );
  };

  export default TaskHeader;