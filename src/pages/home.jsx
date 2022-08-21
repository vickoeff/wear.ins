import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Products from "../components/Products";
import Footer from "../components/Footer";

import { useColorMode } from "@chakra-ui/react";

function Home() {
  const { colorMode } = useColorMode();

  const products = [
    {
      name: "Print.1 - Red Circle",
      spesifications: {
        material: "Cotton Combad 30s",
        color: "Black, White",
        artPosition: "Back",
        size: "S, M, L, XL, XXL",
      },
      tShirt:
        colorMode === "dark"
          ? process.env.PUBLIC_URL + "/images/black-red-circle-FB.png"
          : process.env.PUBLIC_URL + "/images/white-red-circle-FB.png",
      price: "Rp 110.000,-",
      discountedPrice: null,
      isDiscount: false,
    },
    {
      name: "Print.2 - Masker Girl",
      spesifications: {
        material: "Cotton Combad 30s",
        color: "Black, White",
        artPosition: "Front",
        size: "S, M, L, XL, XXL",
      },
      tShirt:
        colorMode === "dark"
          ? process.env.PUBLIC_URL + "/images/black-masker-girl-FB.png"
          : process.env.PUBLIC_URL + "/images/white-masker-girl-FB.png",
      price: "Rp 110.000,-",
      discountedPrice: null,
      isDiscount: false,
    },
    {
      name: "Print.3 - Ninja",
      spesifications: {
        material: "Cotton Combad 30s",
        color: "Black, White",
        artPosition: "Back",
        size: "S, M, L, XL, XXL",
      },
      tShirt:
        colorMode === "dark"
          ? process.env.PUBLIC_URL + "/images/black-ninja-FB.png"
          : process.env.PUBLIC_URL + "/images/white-ninja-FB.png",
      price: "Rp 110.000,-",
      discountedPrice: null,
      isDiscount: false,
    },
    {
      name: "Girl in the light",
      spesifications: {
        material: "Cotton Combad 30s",
        color: "Black, White",
        artPosition: colorMode === "dark" ? "Back" : "Front",
        size: "S, M, L, XL, XXL",
        isNew: true,
      },
      tShirt:
        colorMode === "dark"
          ? process.env.PUBLIC_URL + "/images/black-light-girl.png"
          : process.env.PUBLIC_URL + "/images/white-light-girl.png",
      price: "Rp 120.000,-",
      discountedPrice: null,
      isDiscount: false,
    },
    {
      name: "Sunshine",
      spesifications: {
        material: "Cotton Combad 30s",
        color: "Khaki",
        artPosition: "Front",
        size: "S, M, L, XL, XXL",
        isNew: true,
      },
      tShirt:
        colorMode === "dark"
          ? process.env.PUBLIC_URL + "/images/sunshine.png"
          : process.env.PUBLIC_URL + "/images/sunshine.png",
      price: "Rp 110.000,-",
      discountedPrice: null,
      isDiscount: false,
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
