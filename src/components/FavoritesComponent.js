import React from 'react';

const Favorites = () => (

  <div className="main-box">
    <div className="results-box">
      <nav className="search-selector">
          <ul>
              <li className="active">Artists</li>
              <li>Albuns</li>
              <li>Tracks</li>
          </ul>
      </nav>
      <div className="album-list">
        <ul>
            <li>
                <div className="album-image">
                    <div className="handle-favorite-button">
                        <i className="fas fa-star"></i> 
                        <span> Add as Favorite</span>
                      </div>
                    <img src="https://downloads-pearljam-com.s3.amazonaws.com/img/album-art/1463090805020c40c2530cde7fe2b6e223731e7c10.jpg" />
                </div>
                <div className="album-info">
                    <h2>Lighting Bold</h2>
                    <span>Perl Jam</span>
                    <span className="rating hot"><i className="fas fa-fire"></i>Hot</span>
                </div>
            </li>                
        </ul>
      </div>
    </div>  
  </div>
);

export default Favorites;
