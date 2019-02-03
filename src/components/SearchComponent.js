import React from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../store/actions/search';
import { bindActionCreators } from 'redux';
import SearchSelector from './SearchSelector';

const SearchComponent = ({...props}) => (
  <div className="main-box">
    <div className="search-component">
        <input onKeyUp={(e) => props.searchRequest({q: e.target.value, filter: props.filter}) } placeholder="Search for Artists, Albuns or Tracks" type="text" />
    </div>
    <div className="results-box">
      <SearchSelector />
      <div className="album-list">
        <ul>
          {
            ((props.data.albums !== undefined)) ? ( props.data.albums.items.map(album => (
              <li>
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
                    <span className="rating hot"><i className="fas fa-fire"></i>Hot</span>
                </div>
              </li>  
            ))
            ) : <p>Sem albums a exibir</p>
          }
        </ul>
      </div>
    </div>  
  </div>
);

// const mapStateToProps = (state) => ({
//   filter: state.search.filter,
//   data: state.search.data,
// });

const mapStateToProps = function(state){
  console.log(state);
  return{
    filter: state.search.filter,
    data: state.search.data,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps )(SearchComponent);
