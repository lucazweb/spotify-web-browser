
const handleFavoritesPersistence = () => {
  if(localStorage.getItem('web-spotify-favorites')){
    return JSON.parse(localStorage.getItem('web-spotify-favorites'));
  } else {
    return {
      artists: [],
      albuns: [],
      tracks: [],
    }
  }
}

const FAVORITES = handleFavoritesPersistence();

const INITIAL_STATE = {
  search: {},
  filter: 'artist',
  data: [],
  selectedArtist: {},
  selectedAlbum: {},
  favorites: FAVORITES,
}

const handleFavorites = (payload, state) => {
  console.log('handleFavorites', payload.type);

  if(payload.type = 'artist'){
    if( (state.favorites.artists.find(artist => artist.id === payload.favorite.id)) === undefined){
      let newState = {...state, favorites: {...state.favorites, artists: [...state.favorites.artists, payload.favorite]}}
      
      if(sessionStorage.getItem('web-spotify-favorites')){
        console.log('Existe');
      }else {
        localStorage.setItem('web-spotify-favorites', JSON.stringify(newState.favorites));
      }

      return newState;
    } else {
      return state; // Informar que o artista já foi selecionado
    }
  } 
  
  if(payload.type = 'album'){
    return {...state, favorites: {...state.favorites, albuns: [...state.favorites.albuns, payload.favorite]}} 
  }

}

export default function (state = INITIAL_STATE, action){
  
  switch(action.type){
      case  'LOGIN_REQUEST':
        return state;

      case  'SEARCH_REQUEST':
        return state;

      case  'SEARCH_SUCCESS':
        console.log(action.payload.data);
        return {...state, data: action.payload.data}

      case  'SEARCH_FAILURE':
        return state;

      case  'CHANGE_FILTER':
        return {...state, filter: action.payload.data}

      case  'SELECT_ARTIST_REQUEST':
        console.log(action.payload.data);
        return state;

      case  'SELECT_ARTIST_SUCCESS':
        console.log(action.payload.data);
        return {...state, selectedArtist: action.payload.data}

      case  'SELECT_ARTIST_FAILURE':
        console.log(action.payload.data);
        return state;

      case  'SELECT_ALBUM_REQUEST':
        console.log(action.payload.data);
        return state;

      case  'SELECT_ALBUM_SUCCESS':
        console.log(action.payload.data);
        return {...state, selectedAlbum: action.payload.data}

      case  'SELECT_ALBUM_FAILURE':
        console.log(action.payload.data);
        return state;

      case 'ADD_AS_FAVORITE':
        console.log(action.payload.data);
        return handleFavorites(action.payload.data, state)

      default:
          return state;
  }
}
