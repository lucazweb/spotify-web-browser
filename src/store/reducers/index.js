import { combineReducers } from 'redux';

const INITIAL_STATE = {
    search: {}
}

const search = function (state = INITIAL_STATE, action){
    
    switch(action.type){
        case  'LOGIN_REQUEST':
          console.log(state, action.payload.token);
          return state;

        default:
            return state;
    }
}

export default combineReducers({
    search,
});
