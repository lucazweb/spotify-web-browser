import React from 'react';
import Placeholder from './Placeholder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const handleTrackImage = (url) => {
  return (<div className="album-image artist-image album-image__cover" style={{backgroundImage: `url(${url})`}}></div>)
};

const handleArtists = (arr, artist, index) => {
  if(arr.length > 1){
    return artist.name;
  }else{
    return `${artist.name}, `
  }
};

const FavTrackList = ({...props}) => (
  <div className="album-list">
  <ul>
{
  props.favorites.tracks.length > 0 ? props.favorites.tracks.map(track => (
    <li key={track.id}>
      <div className="album-image">
          <div onClick={() => props.remove({id: track.id, type: 'track'})} className="remove-button"><FontAwesomeIcon icon={faTimes}/></div>
          <div className="handle-favorite-button">
              <i className="fas fa-star"></i> 
          </div>
          {
            track.album.images ? handleTrackImage(track.album.images[0].url) : (<span> Sem imagem</span>)
          }
      </div>
      <div className="album-info">
          <h2>{track.name}</h2>
          {
            track.artists.length > 1 
            ? (<span> { track.artists.map((artist, index) => ( handleArtists(track.artists, artist, index)))} </span>) 
            : (<span>{track.artists[0].name}</span>)
          }
      </div>
    </li>     
  )) : (<Placeholder msg="Try add your favorite Tracks here" />)
}
           
  </ul>
</div>  
);

export default FavTrackList;
