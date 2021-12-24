import styled from "styled-components";

export const PageContent = styled.div`
  /* display: flex;
  justify-content: space-around; */
  margin: 20px;
`
export const ListWrapper = styled.div`
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 6px;
  margin-bottom: 24px;
`
export const CartList = styled.div`
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #8c8c8c;
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
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
export const OrderSummary = styled.div`
  padding: 12px;
  font-size: 1.2rem;
  display: flex;
 justify-content: space-between;
 
 @media only screen and (max-width: 376px) {
    font-size: 1rem;
  }
`
export const TotalPrice = styled.div`
  display: flex;
  font-weight: 500;
  text-align: center;
  font-size: 1.8rem;
  span {
    margin-right: 8px;
  }

  @media only screen and (max-width: 376px) {
    font-size: 1rem;
  }
`
export const Discount = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  span {
    margin-right: 8px;
  }
`
export const DiscountValue = styled.span`
  /* font-weight: 500; */
  
`
export const InfoFormItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 6px;
`

export const InfoHead = styled.h4`
  display: flex;
  justify-content: space-between;
`
export const InfoName = styled.h4`
  font-size: 1rem;
  text-transform: uppercase;
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
export const Bottom = styled.p`
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
  font-family: 'Philosopher', sans-serif;
`