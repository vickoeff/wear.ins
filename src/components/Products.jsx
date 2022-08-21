import { Container, Box, Heading, useStyleConfig } from "@chakra-ui/react";
import Slider from "react-slick";
import ProductItem from "../components/molecules/ProductItem";

export default function Products({ products }) {
  var settings = {
    dots: true,
    autoplay: true,
    lazy: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const styles = useStyleConfig("Products");

  return (
    <Box __css={styles}>
      <Container maxW="container.md" minH="100vh">
        <Heading variant="products-title" size="3xl">
          Our Products
        </Heading>
        <Slider {...settings}>
          {products.map((item, index) => {
            return (
              <ProductItem
                key={index}
                name={item.name}
                spesifications={item.spesifications}
                tShirt={item.tShirt}
                price={item.price}
                isDiscount={item.isDiscount}
                discountedPrice={item.discountedPrice}
              />
            );
          })}
        </Slider>
      </Container>
    </Box>
  );
}
