import styled, { css } from "styled-components";

export const ProductListContainer = styled.div`
  margin: 16px auto 30px;
  padding: 0 16px;
  max-width: 1280px;
  width: 100%;
`;

export const PageTitle = styled.div`
  margin: 0px auto;
  padding: 16px;
  width: 100%;
  background-color: #fff;
  text-align: center;
  
  h2 {
    font-size: 1.5rem;
    letter-spacing: 1.8px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

export const CollapseHeader = styled.span`
    text-transform: uppercase;
    font-weight: 600;
`

export const CheckboxWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;

   & .ant-checkbox-wrapper {
    margin: 4px 0;
   }
`
export const ProductCard = styled.div`
  text-align: center;
  cursor: pointer;
  background-color: #fff;
  position: relative;
  transition: all 0.2s;

  img {
    max-width: 100%;
    height: 200px;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
`
export const ImageContent = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: all 0.3s;
`;

export const BestSeller = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
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
  margin: 24px 0;

  & span {
    color: #757575;
    font-size: 1.1rem;
    text-decoration: underline;
    text-transform: uppercase;

    &:hover {
      color: #000;
      cursor: pointer;
    }
  }
`