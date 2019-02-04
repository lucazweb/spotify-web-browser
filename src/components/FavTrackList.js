import React from 'react';
import Placeholder from './Placeholder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehBlank, faHeart, faFire, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons';

const FavTrackList = ({...props}) => (
  <div className="album-list">
  <ul>
{
  props.favorites.tracks.length > 0 ? props.favorites.tracks.map(track => (
    <li>
      <div className="album-image">
          <div onClick={() => props.remove({id: track.id, type: 'track'})} className="remove-button"><FontAwesomeIcon icon={faTimes}/></div>
          <div className="handle-favorite-button">
              <i className="fas fa-star"></i> 
          </div>
          {
            //album.images ? handleArtirstImage(album.images[0].url) : (<span> Sem imagem</span>)
          }
      </div>
      <div className="album-info">
          <h2>{track.name}</h2>
          {
           // album.artist ? (<span>Varios</span>) : (<span>{album.artists[0].name}</span>)
          }
      </div>
    </li>     
  )) : (<Placeholder msg="Try add your favorite Tracks here" />)
}
           
  </ul>
</div>  
);

export default FavTrackList;
