import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchActions from '../store/actions/search';
import FavAlbumList from './FavAlbumList';
import FavArtistsList from './FavArtistList';
import FavTrackList from './FavTrackList';

const FavoritesComponent = ({...props}) => (
  <div className="main-box main-box__favorites">
    <div className="results-box">
      <nav className="search-selector">
          <ul>
            <li onClick={() => props.changeFilter('artist')} className={props.filter === 'artist' ? 'active' : ''}>Artists</li>
            <li onClick={() => props.changeFilter('album')} className={props.filter === 'album' ? 'active' : ''}>Albuns</li>
            <li onClick={() => props.changeFilter('track')} className={props.filter === 'track' ? 'active' : ''} >Tracks</li>
          </ul>
      </nav>

      {
        props.filter === 'artist' && (<FavArtistsList remove={props.removeFromFavorites} favorites={props.favorites} />)
      }

      {
        props.filter === 'album' && (<FavAlbumList remove={props.removeFromFavorites} favorites={props.favorites} />)
      }

      {
        props.filter === 'track' && (<FavTrackList remove={props.removeFromFavorites} favorites={props.favorites} />)
      }
    </div>  
  </div>
);

const mapStateToProps = (state) => ({
  favorites: state.search.favorites,
  filter: state.search.filter,
});

const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesComponent);
