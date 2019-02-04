import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchActions from '../store/actions/search';
import FavoriteButton from '../components/FavoriteButton';
import Preloader from './Preloader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehBlank, faHeart, faFire, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

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

const unknowAvatar = './assets/unknow.jpg';
const handleArtirstImage = (url) => {
  return (<div className="album-image album-image__cover" style={{backgroundImage: `url(${url})`}}></div>)
};

const ArtistDetail = ({...props}) => (
  <div className="detail-box">
    {
      props.loading && (<Preloader />)
    }

    {
      !props.loading && (
        <Fragment>
          <div className="detail-selected">
            {
              props.selectedArtist.images && handleArtirstImage(props.selectedArtist.images[0].url)
            }
            <h2>{props.selectedArtist.name}</h2>
            { handlePopularity(props.selectedArtist.popularity)}
            <FavoriteButton onClick={() => props.addAsFavorite({favorite: props.selectedArtist, type: 'artist'})} />
          </div>
          <div className="detail-items">
            <div className="album-list">
              <ul>
                {
                  props.selectedArtist.albums && props.selectedArtist.albums.items.slice(0, 5).map(album => (
                    <li key={album.id}>
                      {
                        album.images[0] ? 
                        (handleArtirstImage(album.images[0].url))
                        : (<div className="album-image" style={{backgroundImage: `url(${unknowAvatar})`}}></div>)
                      }                
                      <div className="album-info">
                          <h2>{album.name}</h2>
                          <span>{props.selectedArtist.name}</span>
                          {
                            handlePopularity(album.popularity)
                          }
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
  selectedArtist: state.search.selectedArtist,
  loading: state.search.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);
