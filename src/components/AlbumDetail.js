import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchActions from '../store/actions/search';
import FavoriteButton from '../components/FavoriteButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehBlank, faHeart, faFire, faThumbsUp, faMusic } from '@fortawesome/free-solid-svg-icons';

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
  return (<div className="album-image" style={{backgroundImage: `url(${url})`}}></div>)
};

const AlbumDetail = ({...props}) => (
  <div className="detail-box detail-box__album">
    <div className="detail-selected">
      {
        props.selectedAlbum.images && handleArtirstImage(props.selectedAlbum.images[0].url)
      }
      <h2>{props.selectedAlbum.name}</h2>
      {
        props.selectedAlbum.artists && 
        (<span>
          {
            props.selectedAlbum.artists.length > 1 ? (<span>{props.selectedAlbum.artists[0].name}</span>) : (<span> Varios </span>)
          }
        </span>)
      }

     
      {/* <p>{props.selectedAlbum.artists[0].name}</p> */}
     
      { handlePopularity(props.selectedAlbum.popularity)}
      <FavoriteButton onClick={() => props.addAsFavorite({favorite: props.selectedAlbum, type: 'album'})} />
    </div>
    <div className="detail-items">
      <div className="track-list">
        <h2> Tracks </h2>
        <ul>
          {
            props.selectedAlbum.tracks && props.selectedAlbum.tracks.data.items.map(track => (
              <li>
                <FontAwesomeIcon icon={faMusic}/>
                <div className="album-info">
                    <span>{track.name}</span>
                </div>
              </li>              
            )) 
          }
        </ul>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  selectedAlbum: state.search.selectedAlbum,
});

const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
