import React from 'react';
import { PlaceHolderBox } from './styles';
import spotify from './spotify_icon.svg';

const Placeholder = ({...props}) => (
  <PlaceHolderBox> <img src={spotify} alt="Spotify" /> {props.msg}</PlaceHolderBox>
);

export default Placeholder;
