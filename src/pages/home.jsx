import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Footer from '../components/Footer';

function Home() {
  const navbar = [
    {
      label: 'Products',
    },
    {
      label: 'Contact',
    },
  ];

  const products = [
    {
      tShirt: process.env.PUBLIC_URL + '/images/ninjas.png',
      price: 'Rp 100.000,-',
      discountedPrice: 'Rp 90.000,-',
      isDiscount: true,
    },
    {
      tShirt: process.env.PUBLIC_URL + '/images/masker-girl.png',
      price: 'Rp 100.000,-',
    },
    {
      tShirt: process.env.PUBLIC_URL + '/images/cat-girl.png',
      price: 'Rp 100.000,-',
    },
  ];

  return (
    <>
      <Navbar navbar={navbar} />
      <Banner />
      <Products products={products} />
      <Footer />
    </>
  );
}

export default Home;
