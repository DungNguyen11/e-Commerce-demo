import styled from "styled-components";

import EmptyCartImg from "../../../assets/images/empty_cart.png";


export const CartContainer = styled.div`
  /* background: radial-gradient(#fdfdfb, #e8e8e8); */
  /* max-width: 1280px; */
  width: 100%;
  margin: 0 auto 50px;
  padding: 0 15px;

  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`

export const EmptyCartContainer = styled.div`
  background: url(${EmptyCartImg});
`

