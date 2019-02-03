import React, { Component } from 'react';
import ArtistDetail from '../../components/ArtistDetail';
import Sidebar from '../../components/Sidebar';

export default class Artist extends Component{
  render(){
    return (
      <div className="app-container">
          <Sidebar />
          <div className="main-box">
            <ArtistDetail />
          </div>
      </div>
    )
  }
};

