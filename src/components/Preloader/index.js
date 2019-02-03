import React from 'react';
import { Pop } from 'react-preloading-component';
import { PreloaderBox } from './styles';

const Preloader = () => (
  <PreloaderBox>
    <Pop color='#4caf50' />
  </PreloaderBox>
);

export default Preloader;
