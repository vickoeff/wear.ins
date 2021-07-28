import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Footer from '../components/Footer';

import { useColorMode } from '@chakra-ui/react';

function Home() {
  const { colorMode } = useColorMode();

  const products = [
    {
      name: 'Print.1 - Red Circle',
      spesifications: {
        material: 'Cotton Combad 30s',
        color: 'Black, White',
        size: 'S, M, L, XL, XXL',
      },
      tShirt:
        colorMode === 'dark'
          ? process.env.PUBLIC_URL + '/images/black-red-circle-FB.png'
          : process.env.PUBLIC_URL + '/images/white-red-circle-FB.png',
      price: 'Rp 110.000,-',
      discountedPrice: 'Rp 89.900,-',
      isDiscount: true,
    },
    {
      name: 'Print.2 - Masker Girl',
      spesifications: {
        material: 'Cotton Combad 30s',
        color: 'Black, White',
        size: 'S, M, L, XL, XXL',
      },
      tShirt:
        colorMode === 'dark'
          ? process.env.PUBLIC_URL + '/images/black-masker-girl-FB.png'
          : process.env.PUBLIC_URL + '/images/white-masker-girl-FB.png',
      price: 'Rp 110.000,-',
      discountedPrice: 'Rp 89.900,-',
      isDiscount: true,
    },
    {
      name: 'Print.3 - Ninja',
      spesifications: {
        material: 'Cotton Combad 30s',
        color: 'Black, White',
        size: 'S, M, L, XL, XXL',
      },
      tShirt:
        colorMode === 'dark'
          ? process.env.PUBLIC_URL + '/images/black-ninja-FB.png'
          : process.env.PUBLIC_URL + '/images/white-ninja-FB.png',
      price: 'Rp 110.000,-',
      discountedPrice: 'Rp 89.900,-',
      isDiscount: true,
    },
  ];

  return (
    <>
      <Navbar />
      <Banner />
      <Products products={products} />
      <Footer />
    </>
  );
}

export default Home;
