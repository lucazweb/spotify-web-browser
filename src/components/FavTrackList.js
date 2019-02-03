import React from 'react';

const FavTrackList = ({...props}) => (
  <div className="album-list">
  <ul>
    {
      props.favorites.artists.length > 0 ? props.favorites.artists.map(album => (
        <li>
          <div className="album-image">
              <div className="handle-favorite-button">
                  <i className="fas fa-star"></i> 
              </div>
              {/* <img src="https://downloads-pearljam-com.s3.amazonaws.com/img/album-art/1463090805020c40c2530cde7fe2b6e223731e7c10.jpg" /> */}
          </div>
          <div className="album-info">
              <h2>Lighting Bold</h2>
              <span>Perl Jam</span>
              <span className="rating hot"><i className="fas fa-fire"></i>Hot</span>
          </div>
        </li>     
      )) : <span> Nenhum album adicionado ainda</span>
    }
           
  </ul>
</div>  
);

export default FavTrackList;
