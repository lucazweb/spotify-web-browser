import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchActions from '../store/actions/search';
import FavoriteButton from '../components/FavoriteButton';
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

 const handleArtirstImage = (url) => {
  return (<div className="album-image" style={{backgroundImage: `url(${url})`}}></div>)
};

const ArtistDetail = ({...props}) => (
  <div className="detail-box">
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
              <li>
                <div className="album-image">
                {
                  album.images && (<img alt="artist" src={album.images[0].url} />)
                }
                    
                </div>
                <div className="album-info">
                    <h2>{album.name}</h2>
                    <span>{props.selectedArtist.name}</span>
                    <span className="rating hot"><i class="fas fa-fire"></i> Hot</span>
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
  selectedArtist: state.search.selectedArtist,
});

const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);
