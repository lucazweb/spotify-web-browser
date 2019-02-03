import React from 'react';
import { FavoriteBtn } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const FavoriteButton = ({...props}) => (
  <FavoriteBtn onClick={props.onClick}> <FontAwesomeIcon icon={faStar} /> Add to Favorites</FavoriteBtn>
);

export default FavoriteButton;
