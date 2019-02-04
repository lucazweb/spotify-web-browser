
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
    if((state.favorites.artists.find(artist => artist.id === payload.favorite.id)) === undefined){
      let newState = {...state, favorites: {...state.favorites, artists: [...state.favorites.artists, payload.favorite]}};
      localStorage.setItem('web-spotify-favorites', JSON.stringify(newState.favorites));
      return newState;
    };
  };

  if(payload.type === 'album'){
    if((state.favorites.albuns.find(album => album.id === payload.favorite.id)) === undefined){
      let newState = {...state, favorites: {...state.favorites, albuns: [...state.favorites.albuns, payload.favorite]}};
      localStorage.setItem('web-spotify-favorites', JSON.stringify(newState.favorites)); 
      return newState;
    };
  };

  if(payload.type === 'track'){
    if((state.favorites.tracks.find(track => track.id === payload.favorite.id)) === undefined){
      let newState = {...state, favorites: {...state.favorites, tracks: [...state.favorites.tracks, payload.favorite]}};
      localStorage.setItem('web-spotify-favorites', JSON.stringify(newState.favorites)); 
      return newState;
    };
  };
  return state;
};

const removeFromFavorites = (payload, state) => {
  if(payload.type === 'artist'){
    let newState = {...state, favorites: {...state.favorites, artists: state.favorites.artists.filter(a => a.id !== payload.id)}};
    localStorage.setItem('web-spotify-favorites', JSON.stringify(newState.favorites));
    return newState;
  };

  if(payload.type === 'album'){
    let newState = {...state, favorites: {...state.favorites, albuns: state.favorites.albuns.filter(a => a.id !== payload.id)}};
    localStorage.setItem('web-spotify-favorites', JSON.stringify(newState.favorites));
    return newState;
  };
  
  let newState = {...state, favorites: {...state.favorites, tracks: state.favorites.tracks.filter(t => t.id !== payload.id)}};
  localStorage.setItem('web-spotify-favorites', JSON.stringify(newState.favorites));
  return newState;
}

export default function (state = INITIAL_STATE, action){
  
  switch(action.type){
    case 'LOGIN_REQUEST':
      return state;

    case 'SEARCH_REQUEST':
      return {...state, loading: true};

    case 'SEARCH_SUCCESS':
      return {...state, loading: false, data: action.payload.data}

    case 'SEARCH_FAILURE':
      return state;

    case 'CHANGE_FILTER':
      return {...state, filter: action.payload.data}

    case 'SELECT_ARTIST_REQUEST':
      return {...state, loading: true};

    case 'SELECT_ARTIST_SUCCESS':
      return {...state, loading: false, selectedArtist: action.payload.data}

    case 'SELECT_ARTIST_FAILURE':
      return {...state, loading: false}

    case 'SELECT_ALBUM_REQUEST':
      return {...state, loading: true};

    case 'SELECT_ALBUM_SUCCESS':
      return {...state, loading: false, selectedAlbum: action.payload.data}

    case 'SELECT_ALBUM_FAILURE':
      return {...state, loading: false,}

    case 'ADD_AS_FAVORITE':
      return handleFavorites(action.payload.data, state);

    case 'REMOVE_FROM_FAVORITES':
      return removeFromFavorites(action.payload.data, state);

    default:
        return state;
  }
}
