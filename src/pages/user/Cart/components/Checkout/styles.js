import styled from "styled-components";
import { Image } from "antd";

export const PageContent = styled.div`
  /* display: flex;
  justify-content: space-around; */
  margin: 20px;
`
export const CartList = styled.div`
  display: flex;
  /* align-items: center; */
  padding: 12px 0;
  margin: 20px 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  /* justify-content: space-between; */
`
export const Img = styled(Image)`
  max-width: 100%;
  height: 90px;
  width: 100px;
  object-fit: cover;
`
export const Checkbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* flex-grow: 1; */
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`
export const ProductHead = styled.div`
 display: flex;
 justify-content: space-between;
`
export const ProductName = styled.h4`
 text-transform: uppercase;
 font-size: 1.1rem;
 font-weight: 500;

 @media only screen and (max-width: 376px) {
    font-size: 0.9rem;
  }
`
export const ProductSize = styled.div`
  color: #919191;
  font-size: 1rem;
  @media only screen and (max-width: 376px) {
    font-size: 0.8rem;
  }
`
export const ProductPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 500;

  @media only screen and (max-width: 376px) {
    font-size: 0.9rem;
  }
`
export const ProductBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`
export const QuantityInput = styled.div`
  
`
export const ProductOrder = styled.div`
  padding: 24px;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  position: sticky;
  top: 100px;
`
export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  span {
    font-size: 1.2rem;
    font-weight: 500;
  }
`
export const Shipping = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  span {
    font-size: 1.2rem;
    font-weight: 500;
  }
`
export const Discount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  span {
    font-size: 1.2rem;
    font-weight: 500;
  }
`

export const Promo = styled.div`
  /* display: flex;
  justify-content: space-between;*/
  margin: 12px 0px;

  h3 {
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 12px;
  } 

  & .ant-btn-primary {
    background-color: rgb(255, 255, 255);
  }

  & span {
    color: #000;
    font-size: 1rem;
    margin-top: -3px;
  }

  &:hover span{
      color: #fff;
    } 

    &:hover .ant-btn-primary {
    background-color: #262626;
  }
`
export const DiscountCard = styled.div`
  display: inline-flex;
  width: 100%;
  padding: 6px 8px;
  margin-bottom: 12px;
  font-size: 0.8rem;
  border: 1px solid #c7c7c7;
  border-radius: 6px;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
  }
`
export const DiscountValue = styled.div`
  font-weight: 500;
  
`

export const Total = styled.div`
  /* display: flex; */
  font-size: 1.6rem;
  text-align: center;
  font-style: oblique;
  font-weight: 500;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(0,0,0,0.1);
  span {
    margin: 0 12px;
  }
`
export const CheckOutBtn = styled.div`
  margin-top: 30px;

  & .ant-btn-lg {
    height: 50px;
    border-radius: 50px;
  }
  /* & .ant-btn-primary {
    background-color: rgb(255, 255, 255);
  } */

  & span {
    font-size: 1.2rem;
    margin-top: -3px;
  }

  /* &:hover .ant-btn-primary {
    background-color: #262626;
  }

  &:hover span{
    color: #fff;
  } */
`


