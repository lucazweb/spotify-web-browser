const INITIAL_STATE = {
  search: {},
  filter: 'artist',
  data: [],
  selectedArtist: {},
  selectedAlbum: {},
  favorites: {
    artists: [],
    albuns: [],
  },
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

      case 'ADD_AS_FAVORITE':
        console.log(action.payload.data);
        if(action.payload.data.type = 'artist'){
          return {...state, favorites: {...state.favorites, artists: [...state.favorites.artists, action.payload.data.favorite]}}
        } else if(action.payload.data.type = 'album'){
          return {...state, favorites: {...state.favorites, albuns: [...state.favorites.albuns, action.payload.data.favorite]}} 
        }
        return state;

      default:
          return state;
  }
}
