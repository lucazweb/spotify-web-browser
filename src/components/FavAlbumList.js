import React from 'react';
import Placeholder from './Placeholder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehBlank, faHeart, faFire, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons';

const handleArtirstImage = (url) => {
  return (<div className="album-image artist-image album-image__cover" style={{backgroundImage: `url(${url})`}}></div>)
};

const handlePopularity = (popularity) => {
  if(popularity < 30){
     return (<span className="rating underground"><FontAwesomeIcon icon={faMehBlank}/> Underground</span>)
  }
 
  if((popularity > 30) && (popularity < 59)){
    // Regular
    return (<span className="rating regular"><FontAwesomeIcon icon={faThumbsUp}/> Regular</span>)
  }
 
  if((popularity >= 60) && (popularity < 80)){
    // Coll
    return (<span className="rating cool"><FontAwesomeIcon icon={faHeart}/> Cool</span>)
  }
  return (<span className="rating hot"><FontAwesomeIcon icon={faFire}/> Hot</span>)
 }

const FavAlbumList = ({...props}) => (
  <div className="album-list">
  <ul>
    {
      props.favorites.albuns.length > 0 ? props.favorites.albuns.map(album => (
        <li>
          <div className="album-image">
              <div onClick={() => props.remove({id: album.id, type: 'album'})} className="remove-button"><FontAwesomeIcon icon={faTimes}/></div>
              <div className="handle-favorite-button">
                  <i className="fas fa-star"></i> 
              </div>
              {
                album.images ? handleArtirstImage(album.images[0].url) : (<span> Sem imagem</span>)
              }
          </div>
          <div className="album-info">
              <h2>{album.name}</h2>
              {
               // album.artist ? (<span>Varios</span>) : (<span>{album.artists[0].name}</span>)
              }
              {
                handlePopularity(album.popularity)
              }
          </div>
        </li>     
      )) : (<Placeholder msg="Try add your favorite Albums here" />)
    }
           
  </ul>
</div>  
);

export default FavAlbumList;
