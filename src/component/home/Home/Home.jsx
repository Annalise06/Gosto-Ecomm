import React from 'react';
import Product from '../Product/Product';
import Card from './Card';
import Hero from './Hero';
import Banner from '../banner/Banner';
import TopProduct from '../top/TopProduct';
import Price from '../price/Price';
import Testimonial from '../testimonial/Testimonial';
import Blog from '../blog/Blog';

const Home = () => {
  return (
    <div className='bg-gr5ay-100'>
      <Hero />
      <Card />
      <Product />
      <Banner />
      <TopProduct />
      <Price />
      <Testimonial />
      <Blog />
    </div>
  )
}

export default Home;