import React from 'react'

import Slide from "./Slide";
import Bestseller from "./Bestseller";
import Quotes from "./Quotes";
import ProductHome from "./ProductHome";
import Newsletter from "./Newsletter";

const Homepage = () => {
  return (
    <div>
      <Slide/>
      <Bestseller/>
      <ProductHome/>
      <Quotes/>
      <Newsletter/>
    </div>
  )
}

export default Homepage
