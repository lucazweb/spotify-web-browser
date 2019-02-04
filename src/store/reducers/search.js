
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
  loading: false,
}

const handleFavorites = (payload, state) => {
  if(payload.type === 'artist'){
    if( (state.favorites.artists.find(artist => artist.id === payload.favorite.id)) === undefined){
      let newState = {...state, favorites: {...state.favorites, artists: [...state.favorites.artists, payload.favorite]}} 
      if(sessionStorage.getItem('web-spotify-favorites')){
        console.log('Existe');
      }else {
        localStorage.setItem('web-spotify-favorites', JSON.stringify(newState.favorites));
      };
      return newState;
    } 
  };

  if(payload.type === 'album'){
    return {...state, favorites: {...state.favorites, albuns: [...state.favorites.albuns, payload.favorite]}} 
  };

  if(payload.type === 'track'){
    return {...state, favorites: {...state.favorites, tracks: [...state.favorites.tracks, payload.favorite]}} 
  };
};

const removeFromFavorites = (payload, state) => {
  if(payload.type === 'artist'){
    let newState = {...state, favorites: {...state.favorites, artists: state.favorites.artists.filter(a => a.id !== payload.id)}};
    localStorage.setItem('web-spotify-favorites', JSON.stringify(newState.favorites));
    return newState;
  };

  if(payload.type === 'album'){
    console.log('inner_loop');
    let newState = {...state, favorites: {...state.favorites, albuns: state.favorites.albuns.filter(a => a.id !== payload.id)}};
    localStorage.setItem('web-spotify-favorites', JSON.stringify(newState.favorites));
    return newState;
  };

  return {...state, favorites: {...state.favorites, tracks: state.favorites.tracks.filter(t => t.id !== payload.id)}}
}

export default function (state = INITIAL_STATE, action){
  
  switch(action.type){
    case 'LOGIN_REQUEST':
      return state;

    case 'SEARCH_REQUEST':
      return {...state, loading: true};

    case 'SEARCH_SUCCESS':
      console.log(action.payload.data);
      return {...state, loading: false, data: action.payload.data}

    case 'SEARCH_FAILURE':
      return state;

    case 'CHANGE_FILTER':
      return {...state, filter: action.payload.data}

    case 'SELECT_ARTIST_REQUEST':
      console.log(action.payload.data);
      return {...state, loading: true};

    case 'SELECT_ARTIST_SUCCESS':
      console.log(action.payload.data);
      return {...state, loading: false, selectedArtist: action.payload.data}

    case 'SELECT_ARTIST_FAILURE':
      console.log(action.payload.data);
      return {...state, loading: false}

    case 'SELECT_ALBUM_REQUEST':
      console.log(action.payload.data);
      return state;

    case 'SELECT_ALBUM_SUCCESS':
      console.log(action.payload.data);
      return {...state, selectedAlbum: action.payload.data}

    case 'SELECT_ALBUM_FAILURE':
      console.log('ERROR: ', action.payload.data);
      return {...state, loading: false,}

    case 'ADD_AS_FAVORITE':
      console.log(action.payload.data);
      return handleFavorites(action.payload.data, state);

    case 'REMOVE_FROM_FAVORITES':
      console.log(action.payload.data);
      return removeFromFavorites(action.payload.data, state);

    default:
        return state;
  }
}
