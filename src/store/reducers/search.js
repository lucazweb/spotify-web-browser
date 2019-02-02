const INITIAL_STATE = {
  search: {},
  filter: 'artist',
}

export default function (state = INITIAL_STATE, action){
  
  switch(action.type){
      case  'LOGIN_REQUEST':
        return state;

      case  'SEARCH_REQUEST':
        return state;

      case  'SEARCH_SUCCESS':
        return state;

      case  'SEARCH_FAILURE':
        return state;

      default:
          return state;
  }
}
