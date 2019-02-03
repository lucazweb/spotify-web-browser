import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehBlank, faHeart, faFire, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons';

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

const handleArtirstImage = (url) => {
  return (<div className="album-image album-image__cover artist-image" style={{backgroundImage: `url(${url})`}}></div>)
};

const FavArtistList = ({...props}) => (
  <div className="album-list">
  <ul>
    {
      props.favorites.artists.length > 0 ? props.favorites.artists.map(artist => (
        <li>
          <div onClick={() => props.remove({id: artist.id, type: 'artist'})} class="remove-button"> <FontAwesomeIcon icon={faTimes}/> </div>
          {
            artist.images ? (handleArtirstImage(artist.images[0].url)) : (<span> Sem imagem</span>)
          }
         
          <div className="album-info">
              <h2>{artist.name}</h2>
              {
                handlePopularity(artist.popularity)
              }
          </div>
        </li>     
      )) : <span> Nenhum album adicionado ainda</span>
    }
           
  </ul>
</div>  
);

export default FavArtistList;
