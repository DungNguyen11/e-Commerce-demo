import styled from "styled-components";
import TopWrapperImg from '../../../assets/images/top_wrapper_img.png'

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
export const PageTitle = styled.div`
  background: url(${TopWrapperImg});
  width: 100%;

  h4 {
  padding: 24px;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  /* background-color: #fff; */
  }
`
export const PageContent = styled.div`
  /* display: flex;
  justify-content: space-around; */
  margin: 20px 0;
`
export const CartList = styled.div`
  display: flex;
  padding: 12px;
  margin: 20px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  /* justify-content: space-between; */
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`
export const ProductImg = styled.div`
  width: 170px;
  height: 160px;
  
  img {
    width: auto;
    height: 100%;
    object-fit: cover;
  }
`
export const ProductDetail = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-around;
`
export const ProductHead = styled.div`
 display: flex;
 justify-content: space-between;
`
export const ProductName = styled.h4`
 text-transform: uppercase;
 font-size: 1.1rem;
 font-weight: 500;
`
export const ProductSize = styled.div`
  color: #919191;
  font-size: 1rem;
`
export const ProductPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`
export const ProductBottom = styled.div`
  display: flex;
  justify-content: space-between;
`
export const QuantityInput = styled.div`
  
`
export const ProductOrder = styled.div`
  margin: 0 20px;
  padding: 24px;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
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

  span {
    font-size: 1.2rem;
    font-weight: 500;
  }
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
  }
  & .ant-btn-primary {
    background-color: rgb(255, 255, 255);
  }

  & span {
    color: #000;
    font-size: 1.2rem;
    margin-top: -3px;
  }

  &:hover .ant-btn-primary {
    background-color: #262626;
  }

  &:hover span{
    color: #fff;
  }
`


