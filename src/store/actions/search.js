export const loginRequest = token => ({
    type: 'LOGIN_REQUEST',
    payload: { token },
});

export const searchRequest = data => ({
  type: 'SEARCH_REQUEST',
  payload: { data },
});

export const searchSuccess = data => ({
    type: 'SEARCH_SUCCESS',
    payload: { data },
});

export const searchFailure = error => ({
    type: 'SEARCH_FAILURE',
    payload: { error },
});
