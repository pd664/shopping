import React from 'react';
import Header from '../header/Header';
import Carousel from '../carousel/Carousel';
import HomeProducts from './HomeProducts';

function Home() {
  return (
    <div>
      <Carousel />
      <HomeProducts />
    </div>
  )
}

export default Home