import React from "react";
import { Container } from "../../components/index";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Products from "../../components/products/Products";



function Main() {
  return (
    <>
      <Container>
        <Header />
        <Products />
        <Footer />
      </Container>
    </>
  );
}

export default Main;
