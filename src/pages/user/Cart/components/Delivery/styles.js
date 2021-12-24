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
// export const Shipping = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding-left: 12px;
//   margin-bottom: 10px;

//   span {
//     font-size: 1.2rem;
//     font-weight: 500;
//   }
// `
// export const Discount = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 10px;
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

export const InfoFormWrapper = styled.div`
  margin-bottom: 16px;
`

export const InfoFormItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 4px;
  cursor: pointer;
`

export const InfoHead = styled.h4`
  display: flex;
  justify-content: space-between;
`
export const Button = styled.h4`
    color: #ff7875;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover {
      color: #ff4d4f;
    }
`
export const InfoName = styled.div`
  /* font-size: 1rem;
  text-transform: uppercase; */
  /* margin-bottom: 8px; */
  display: flex;
  align-items: center;
  
  & h4 {
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0;
  }
`
export const InfoItem = styled.div`
  display: inline-flex;
  span {
    color: #919191;
  }

  h4 {
    margin-left: 8px;
  }
`
export const Default = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  
  & span {
    margin-left: 8px;
    font-weight: 400;
  }
`