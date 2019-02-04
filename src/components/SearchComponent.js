import React from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../store/actions/search';
import { bindActionCreators } from 'redux';
import SearchSelector from './SearchSelector';
import AlbumList from './AlbumList';
import ArtistList from './ArtistList';
import TrackList from './TrackList';
import Placeholder from '../components/Placeholder';
import Preloader from '../components/Preloader'

const handleSearchRequest = (value, filter, searchRequest) => {
  if(value !== ''){
    searchRequest({q: value, filter: filter});
  }
};

const SearchComponent = ({...props}) => (
  <div className="main-box">
    <div className="search-component">
        <input onKeyUp={(e) => handleSearchRequest(e.target.value, props.filter, props.searchRequest) } placeholder="Search for Artists, Albuns or Tracks" type="text" />
    </div>
    <div className="results-box">
      <SearchSelector />
      {
        props.loading && (<Preloader />)
      }

      {
        ((!props.loading) && (props.data.length === 0)) 
        && <Placeholder msg="Browser Spotify Collection and have fun :)" />
      }

      {
        ((props.data.artists !== undefined) && (props.filter === 'artist') && (!props.loading)) && (<ArtistList />)
      }
      
      {
        ((props.data.albums !== undefined) && (props.filter === 'album') && (!props.loading)) && (<AlbumList />)
      }

      {
        ((props.data.tracks !== undefined) && (props.filter === 'track') && (!props.loading) ) && (<TrackList />)
      }

    </div>  
  </div>
);

const mapStateToProps = (state) => ({
  filter: state.search.filter,
  data: state.search.data,
  loading: state.search.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps )(SearchComponent);
