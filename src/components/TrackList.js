import React from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../store/actions/search';
import { bindActionCreators } from 'redux';

const handleArtists = (arr, artist, index) => {
  if(index === arr.length - 1){
    return artist.name;
  }else{
    return `${artist.name}, `
  }
}

const TrackList = ({...props}) => (
  <div className="album-list">
  <ul>
    {
      ((props.data.tracks !== undefined)) ? ( props.data.tracks.items.map(track => (
        <li>
          <div className="album-image">
              <div className="handle-favorite-button">
                <i className="fas fa-star"></i> 
                <span> Add as Favorite</span>
              </div>
              {
                track.album.images && (<img alt="static" src={track.album.images[0].url} />)
              }
              
          </div>
          <div className="album-info">
              <h2>{track.name}</h2>
              {
                track.artists.length > 1 
                ? (<span> { track.artists.map((artist, index) => ( handleArtists(track.artists, artist, index)))} </span>) 
                : (<span>{track.artists[0].name}</span>)
              }
              <span className="rating hot"><i className="fas fa-fire"></i>Hot</span>
          </div>
        </li>  
      ))
      ) : <p>Sem albums a exibir</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
