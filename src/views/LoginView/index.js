import React from 'react';
import { connect } from 'react-redux';
import spotify from './spotify_icon.svg';

import { LoginContainer, LoginLabel, LoginButton } from './style';
import { clientId, redirectUri } from '../../services/api';

const LoginView = () => (
    <LoginContainer> 
        <LoginLabel>Entre com a sua conta Spotify</LoginLabel>
        <LoginButton href={`https://accounts.spotify.com/authorize?client_id=${clientId}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state%20user-read-playback-state&response_type=token&redirect_uri=${redirectUri}`}>
          <img src={spotify} alt="Spotify" />
          Entrar com Spotify
        </LoginButton>    
    </LoginContainer>
);

const mapStateToProps = (state) => ({
    state,
});

export default connect(mapStateToProps)(LoginView);
