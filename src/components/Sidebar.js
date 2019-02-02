import React from 'react';

const Sidebar = () => (
  <div className="sidebar-component">
    <div className="sidebar-header"><h1>Spotify Browser</h1></div>
    <nav className="global-nav">
        <ul>
            <li><i className="fas fa-search"></i> Search</li>
            <li><i className="fas fa-star"></i> Your Library</li>
            <li><i className="fas fa-sign-out-alt"></i> Logout</li>
        </ul>
    </nav>

    <div className="user-menu">
        <div className="user-button">
            <div className="user-image"></div>
            <span className="user-name"></span>
        </div>
    </div>
  </div>  
);

export default Sidebar;
