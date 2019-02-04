import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchActions from '../store/actions/search';
import FavoriteButton from '../components/FavoriteButton';
import Preloader from '../components/Preloader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehBlank, faHeart, faFire, faThumbsUp, faMusic } from '@fortawesome/free-solid-svg-icons';

const handlePopularity = (popularity) => {
  if(popularity < 30){
    // Underground
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
    {
      props.loading && (<Preloader />)
    }  
  
    {
      !props.loading && (
        <Fragment>
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

            { handlePopularity(props.selectedAlbum.popularity)}
            <FavoriteButton onClick={() => props.addAsFavorite({favorite: props.selectedAlbum, type: 'album'})} />
          </div>
          <div className="detail-items">
            <div className="track-list">
              <h2> Tracks </h2>
              <ul>
                {
                  props.selectedAlbum.tracks && props.selectedAlbum.tracks.data.items.map(track => (
                    <li key={track.id}>
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
        </Fragment>
      )
    }
  </div>
);

const mapStateToProps = (state) => ({
  selectedAlbum: state.search.selectedAlbum,
  loading: state.search.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
