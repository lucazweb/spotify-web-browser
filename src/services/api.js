import axios from 'axios';

export const clientId = 'baddc07207dd477a8be39ac16aeeed01';
export const clientSecret = '41e72c2b2c3e4f69aea12f679d7ba264';
export const redirectUri = 'http://localhost:3000';

// export const authReq = axios.create({
//   baseURL: 'https://api.spotify.com/v1/me',
// });

// const api = axios.create({
//     baseURL: 'https://api.spotify.com/v1/search',
// });

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1',
});

export default api;
