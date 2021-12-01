import styled, { css } from "styled-components";

export const Container = styled.div`
  /* padding: 20px 0; */
  margin: 40px 0;
  padding: 0 12px;
  width: 100%;
`
export const TitleWrapper = styled.div`
  position: relative;
  margin: 0 auto 20px;
  text-transform: uppercase;
  text-align: center;
  width: 400px;
  
  &::after {
    position: absolute;
    border-bottom: 1px solid #000;
    content: '';
    left: 10px;
    right: 10px;
    top: 50%;
  }
  `
export const Title = styled.span`
  position: relative;
  font-size: 2rem; 
  background: #fff;
  display: inline-block;
  font-weight: 400;
  /* margin: 0 5rem; */
  padding: 0 1.5rem;
  z-index: 1;
`

export const ProductWrapper = styled.div`
  margin: 12px auto;
  padding: 12px 0;

  @media only screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const ProductCard = styled.div`
  text-align: center;
  cursor: pointer;
  position: relative;
  padding-top: 20px;

  img {
    max-width: 100%;
    height: 200px;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    transition: all 0.2s;
  }
`
export const BestSeller = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 26px;
  border-radius: 5px;
  background-color: #f5f5f5;
  color: #3e4854;
  font-size: 14px;
  font-weight: 400;
  padding: 6px 11px;
`

export const ProductName = styled.div`
  color: #000;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px 0;
  height: 70px;
`
export const ProductPrice = styled.div`
  color: #767676;
  font-size: 1rem;
  font-style: italic;
  padding-bottom: 8px;
`

export const Button = styled.div`
  text-align: center;
  margin-top: 24px;
  cursor: pointer;
  color: #757575;
  font-size: 1.1rem;
  text-decoration: underline;
  text-transform: uppercase;

  &:hover {
    color: #000;
  }
  
`