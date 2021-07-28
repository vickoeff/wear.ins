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
      name: 'Ninja Girl - print.1',
      spesifications: {
        material: 'Cotton Combad 30s',
        color: 'Black, White',
        size: 'S, M, L, XL, XXL',
      },
      tShirt:
        colorMode === 'dark'
          ? process.env.PUBLIC_URL + '/images/black-ninja-girl-FB.png'
          : process.env.PUBLIC_URL + '/images/white-ninja-girl-FB.png',
      price: 'Rp 100.000,-',
      discountedPrice: 'Rp 90.000,-',
      isDiscount: true,
    },
    {
      name: 'Masker Girl - print.2',
      spesifications: {
        material: 'Cotton Combad 30s',
        color: 'Black, White',
        size: 'S, M, L, XL, XXL',
      },
      tShirt:
        colorMode === 'dark'
          ? process.env.PUBLIC_URL + '/images/black-masker-girl-FB.png'
          : process.env.PUBLIC_URL + '/images/white-masker-girl-FB.png',
      price: 'Rp 100.000,-',
      discountedPrice: 'Rp 90.000,-',
      isDiscount: true,
    },
    {
      name: 'Ninja - print.3',
      spesifications: {
        material: 'Cotton Combad 30s',
        color: 'Black, White',
        size: 'S, M, L, XL, XXL',
      },
      tShirt:
        colorMode === 'dark'
          ? process.env.PUBLIC_URL + '/images/black-ninja-FB.png'
          : process.env.PUBLIC_URL + '/images/white-ninja-FB.png',
      price: 'Rp 100.000,-',
      discountedPrice: 'Rp 90.000,-',
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
