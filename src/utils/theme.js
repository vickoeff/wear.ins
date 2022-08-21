import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// Add Custom Components styles
const Navbar = {
  baseStyle: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: "1024",
  },
};

const Line = {
  baseStyle: ({ colorMode }) => ({
    width: "1px",
    height: "20%",
    border: "1px solid",
    borderColor: colorMode === "dark" ? "#2DEA4B" : "orange",
  }),
};

const Card = {
  baseStyle: ({ colorMode }) => ({
    bg: colorMode === "dark" ? "#fff" : "#111",
  }),
  variants: {
    "blured-box": {
      background: "rgba( 255, 255, 255, 0.25 )",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 14.0px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
    "blured-box-footer": {
      position: "absolute",
      bottom: { base: "300px", sm: "270px", md: "304px" },
      left: "0",
      width: "100%",
      height: { base: "40px", md: "120px" },
      background: "rgba( 255, 255, 255, 0.30)",
      backdropFilter: "blur( 10px )",
      boxShadow: "none",
      border: "none",
      borderRadius: "unset",
      zIndex: "2",
    },
  },
};

// Add Custom Sections styles
const Products = {
  baseStyle: ({ colorMode }) => ({
    bg: colorMode === "dark" ? "#fff" : "#111",
    color: colorMode === "dark" ? "#111" : "#fff",
    pt: "4rem",
    pb: "4rem",
  }),
};

const Footer = {
  baseStyle: {
    position: "relative",
    pt: "30%",
    bgImg: process.env.PUBLIC_URL + "/girl-mask.jpg",
    bgPosition: "top",
    bgRepetation: "none",
    bgSize: "100%",
  },
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "Keania One",
    body: "Titillium Web",
  },
  styles: {
    global: ({ colorMode }) => ({
      body: {
        bg: colorMode === "dark" ? "#111" : "#fff",
        color: colorMode === "dark" ? "#fff" : "#111",
        textTransform: "uppercase",
        fontWeight: "semibold",
        letterSpacing: "0.02em",
        borderRadius: "2px",
        fontSize: "12px",
      },
    }),
  },
  components: {
    Navbar,
    Line,
    Card,
    Heading: {
      baseStyle: ({ colorMode }) => ({
        color: colorMode === "dark" ? "#fff" : "#111",
      }),
      variants: {
        "products-title": ({ colorMode }) => ({
          color: colorMode === "dark" ? "#111" : "#fff",
          textAlign: "center",
        }),
        "price-tag": ({ colorMode }) => ({
          color: colorMode === "dark" ? "#111" : "#fff",
        }),
        "discount-price-tag": {
          fontSize: "24px",
          color: "red",
          textDecoration: "line-through",
          opacity: "0.5",
        },
        "new-item": {
          fontSize: "24px",
          color: "red",
          opacity: "0.5",
        },
      },
    },
    Button: {
      variants: {
        "navbar-button": {
          width: "300px",
          height: "48px",
          paddingInlineStart: "2rem",
          paddingInlineEnd: "2rem",
          ml: { base: "4px", sm: "0.5rem", md: "0" },
          mr: { base: "4px", sm: "0.5rem", md: "2rem" },
          borderTopRightRadius: "0",
          borderTopLeftRadius: "0",
          fontSize: "24px",
          color: "#000",
          bg: "#ffffff66",
          backdropFilter: "blur(6px)",
          boxShadow: "0px 4px 6px 0px #9090903d",
        },
      },
    },
    // sections styles
    Products,
    Footer,
  },
});

export default theme;
