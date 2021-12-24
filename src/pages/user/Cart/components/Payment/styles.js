import styled from "styled-components";
import { Image } from "antd";

export const PageContent = styled.div`
  /* display: flex;
  justify-content: space-around; */
  margin: 20px;
`
export const OrderInfo = styled.div`
  border: 1px solid rgba(0,0,0,0.3);
`

export const Bag = styled.div`
  padding: 12px 0;
  margin: 0 24px;
  & h3 {
    /* padding: 12px 24px 0; */
  }
`
export const BagTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  & h3 {
    margin-bottom: 0;
  }
  & span {
    color: #8c8c8c;
    text-decoration: underline;
    cursor: pointer;
  }

`
export const CartList = styled.div`
  display: flex;
  /* align-items: center; */
  /* padding: 12px 24px 8px 12px; */
  margin: 20px 0;
  /* justify-content: space-between; */
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`
export const Img = styled(Image)`
  max-width: 100%;
  height: 90px;
  width: 100px;
  object-fit: cover;
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
 font-size: 1rem;
 font-weight: 500;
 margin-bottom: 0;
`
export const ProductSize = styled.span`
  color: #919191;
  font-size: 0.9rem;
`
export const ProductPrice = styled.div`
  font-size: 1rem;
  font-weight: 500;
`
export const Quantity = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  color: #919191;
`

export const ProductOrder = styled.div`
  padding: 12px 0;
  margin: 0 24px;
  border-top: 1px solid rgba(0,0,0,.2);
  & h3 {
    margin-top: 8px;
  }
`

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-left: 12px;
  span {
    font-size: 1.2rem;
    font-weight: 500;
  }
`
// export const Subtotal = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 10px;
//   padding-left: 12px;
//   span {
//     font-size: 1.2rem;
//     font-weight: 500;
//   }
// `
// export const Shipping = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding-left: 12px;

//   span {
//     font-size: 1.2rem;
//     font-weight: 500;
//   }
// `
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
export const LabelInfo = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  margin-bottom: 8px;
`
export const Info = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  color: #6d6d6d;
`
export const RadioBtnWrapper = styled.div`
  & .ant-radio-button-wrapper:not(:first-child)::before {
    display: none;
  }

  & .ant-radio-button-wrapper {
    width: 200px;
    height: 50px;
    border-radius: 15px;
  }

  & .ant-radio-button-wrapper:last-child {
    margin-left: 16px;

    @media only screen and (max-width: 376px) {
      margin-left: 0;
      margin-top: 12px;
    }
  }
`

