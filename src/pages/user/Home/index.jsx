import React from 'react'

import Slide from "./Slide";
import Bestseller from "./Bestseller";
import Quotes from "./Quotes";
import ProductHome from "./ProductHome";
import Newsletter from "./Newsletter";
import Intro from "./Intro";


const Homepage = () => {
  return (
    <div>
      <Slide/>
      <Intro/>
      <ProductHome/>
      <Bestseller/>
      <Quotes/>
      <Newsletter/>
    </div>
  )
}

export default Homepage
