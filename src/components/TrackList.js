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

const handleTrackImage = (url) => {
  return (<div className="album-image album-image__cover" style={{backgroundImage: `url(${url})`}}></div>)
};

const TrackList = ({...props}) => (
  <div className="album-list track-list-fix">
  <ul>
    {
      ((props.data.tracks !== undefined)) ? ( props.data.tracks.items.map(track => (
        <li>
            {
              track.album.images ? handleTrackImage(track.album.images[0].url) : (<img alt="static" src={track.album.images[0].url} />)
            } 
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
