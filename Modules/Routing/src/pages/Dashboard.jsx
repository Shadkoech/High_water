import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="profile">profile</Link>
        </li>
        <li>
          <Link to="settings">settings</Link>
        </li>
      </ul>
      This is a dashboard
      <Outlet />
    </div>
  );
};

export default Dashboard;
