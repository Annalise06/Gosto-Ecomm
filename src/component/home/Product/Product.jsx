import React, { useState } from 'react';
import { products } from "../../assests/data/data"
import Heading from '../../common/Heading';
import ProductItem from './ProductItem';

const Product = () => {
  const [data, setData] = useState(products);
  console.log(setData)

  return (
    <>
      <section className=''>
        <div className='text-center pt-20'>
          <Heading  title='Trending Products' desc='Check out the hottest designs of the week. These rising stars are worth your attention' />

          <ProductItem data={data} />
        </div>
      </section>
    </>
  )
}

export default Product;