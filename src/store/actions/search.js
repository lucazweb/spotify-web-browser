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

export const changeFilter = data => ({
    type: 'CHANGE_FILTER',
    payload: { data },
});

export const selectArtistReq = data => ({
    type: 'SELECT_ARTIST_REQUEST',
    payload: { data },
});

export const selectArtistSuccess = data => ({
    type: 'SELECT_ARTIST_SUCCESS',
    payload: { data },
});

export const selectArtistFailure = error => ({
    type: 'SELECT_ARTIST_FAILURE',
    payload: { error },
});

export const addAsFavorite = data => ({
    type: 'ADD_AS_FAVORITE',
    payload: { data },
});

export const removeFromFavorites = data => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: { data },
});
