import React, { Component } from 'react';
import FavoritesComponent from '../../components/FavoritesComponent';
import Sidebar from '../../components/Sidebar';

export default class Favorites extends Component{
  render(){
    return (
      <div className="app-container">
          <Sidebar />
          <div className="main-box">
          <FavoritesComponent />
          </div>
      </div>
    )
  }
};

