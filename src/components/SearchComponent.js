import React from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../store/actions/search';
import { bindActionCreators } from 'redux';
import SearchSelector from './SearchSelector';
import AlbumList from './AlbumList';
import ArtistList from './ArtistList';

const SearchComponent = ({...props}) => (
  <div className="main-box">
    <div className="search-component">
        <input onKeyUp={(e) => props.searchRequest({q: e.target.value, filter: props.filter}) } placeholder="Search for Artists, Albuns or Tracks" type="text" />
    </div>
    <div className="results-box">
      <SearchSelector />
      {
        ((props.data.artists !== undefined) && (props.filter === 'artist')) && (<ArtistList />)
      }
      
      {
        ((props.data.albums !== undefined) && (props.filter === 'album')) && (<AlbumList />)
      }

    </div>  
  </div>
);

const mapStateToProps = (state) => ({
  filter: state.search.filter,
  data: state.search.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps )(SearchComponent);
