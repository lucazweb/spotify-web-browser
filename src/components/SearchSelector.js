import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../store/actions/search';

const SearchSelector = ({...props}) => (
  <nav className="search-selector">
    <ul>
        <li onClick={() => props.changeFilter('artist')} className={props.filter === 'artist' ? 'active' : ''}>Artists</li>
        <li onClick={() => props.changeFilter('album')} className={props.filter === 'album' ? 'active' : ''} >Albuns</li>
        <li onClick={() => props.changeFilter('track')} className={props.filter === 'track' ? 'active' : ''}>Tracks</li>
    </ul>
  </nav>
);

const mapStateToProps = (state) => ({
  filter: state.search.filter,
});

const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchSelector);
