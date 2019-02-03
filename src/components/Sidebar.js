import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const handleSessionEnd = () => {
  sessionStorage.removeItem('x-access-token');
  window.location = '/';
}

const Sidebar = () => (
  <div className="sidebar-component">
    <div className="sidebar-header"><h1>Spotify Browser</h1></div>
    <nav className="global-nav">
        <ul>
            <li><Link to='/home'><FontAwesomeIcon icon={faSearch} /> Search</Link></li>
            <li><FontAwesomeIcon icon={faStar} /> Favorites</li>
            <li onClick={() => handleSessionEnd()}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</li>
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
