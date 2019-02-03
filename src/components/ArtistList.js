import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as searchActions from '../store/actions/search';
import { bindActionCreators } from 'redux';
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
  console.log(url);
  return (<div className="album-image" style={{backgroundImage: `url(${url})`}}></div>)
};

const handleArtirstGenres = (arr, genre, index) => {
  if(index === arr.length - 1){
    return genre;
  }else{
    return `${genre}, `
  }
}

const ArtistList = ({...props}) => (
  <div className="artists-list">
    <ul>
      {
        ((props.data.artists !== undefined)) ? props.data.artists.items.map(artirst => (
          <li key={artirst.id}>
          <Link to='/artist' onClick={() => props.selectArtistReq(artirst.id)}>
            {
              artirst.images[0] ? 
              (handleArtirstImage(artirst.images[0].url))
              : (<div className="album-image" style={{backgroundImage: `url(${unknowAvatar})`}}></div>)
            }

            <div className="album-info">
                <h2>{artirst.name}</h2>
                
                <span className="genres">
                  {
                    artirst.genres.map((genre, index) => (
                      <Fragment>{handleArtirstGenres(artirst.genres, genre, index)}</Fragment>
                    ))
                  }
                </span>
                
                {
                  handlePopularity(artirst.popularity)
                }
            </div>
          </Link>
        </li>
        )) : <span>Sem artistas a exibir</span>
      }

    </ul>
</div>
);

const mapStateToProps = function(state){
  console.log(state);
  return{
    filter: state.search.filter,
    data: state.search.data,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList);
