import React from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../store/actions/search';
import { bindActionCreators } from 'redux';
import { Pop } from 'react-preloading-component';
import SearchSelector from './SearchSelector';
import AlbumList from './AlbumList';
import ArtistList from './ArtistList';
import TrackList from './TrackList';

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
        props.loading && (<Pop color='#4caf50' />)
      }

      {
        ((props.data.artists !== undefined) && (props.filter === 'artist')) && (<ArtistList />)
      }
      
      {
        ((props.data.albums !== undefined) && (props.filter === 'album')) && (<AlbumList />)
      }

      {
        ((props.data.tracks !== undefined) && (props.filter === 'track')) && (<TrackList />)
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
