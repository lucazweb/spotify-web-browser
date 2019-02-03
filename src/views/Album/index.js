import React, { Component } from 'react';
import AlbumDetail from '../../components/AlbumDetail';
import Sidebar from '../../components/Sidebar';

export default class Album extends Component{
  render(){
    return (
      <div className="app-container">
          <Sidebar />
          <div className="main-box">
            <AlbumDetail />
          </div>
      </div>
    )
  }
};

