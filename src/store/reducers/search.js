const INITIAL_STATE = {
  search: {},
  filter: 'artist',
  data: []
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

      default:
          return state;
  }
}
