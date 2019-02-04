import React from 'react';
import Placeholder from './Placeholder';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as searchActions from '../store/actions/search';
import { bindActionCreators } from 'redux';

const AlbumList = ({...props}) => (
  <div className="album-list">
  <ul>
    {
      ((props.data.albums !== undefined)) ? ( props.data.albums.items.map(album => (
        <li key={album.id}>
          <Link to='/album' onClick={() => props.selectAlbumReq(album.id)}>
            <div className="album-image">
                <div className="handle-favorite-button">
                  <i className="fas fa-star"></i> 
                  <span> Add as Favorite</span>
                </div>
                {
                  album.images && (<img alt="static" src={album.images[0].url} />)
                }
            </div>
            
            <div className="album-info">
                <h2>{album.name}</h2>
                {
                  album.artists.length > 1 ? (<span>Varios</span>) : (<span>{album.artists[0].name}</span>)
                }
            </div>
          </Link>
        </li>  
      ))
      ) : (<Placeholder msg="No Albums to list" />)
    }
  </ul>
</div>
);

const mapStateToProps = (state) => ({
  filter: state.search.filter,
  data: state.search.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
