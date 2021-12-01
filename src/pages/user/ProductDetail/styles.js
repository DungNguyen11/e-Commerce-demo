import styled, { css } from "styled-components";


export const ProductDetailContainer = styled.div`
  /* background-color: #f7f7f7; */
  max-width: 1280px;
  width: 100%;
  margin: 16px auto 50px;
`

export const ProductDetailWrapper = styled.div`
  margin: 0px auto 30px;
  padding: 16px;
  width: 100%;
  border-bottom: 1px solid #000;

  .space-wrapper {
    margin-top: auto;

    &>.ant-space {
    width: 100%;
    }
  }
`
export const ProductInfo = styled.div`
  /* display: flex;
  flex-direction: column; */
  .space-wrapper {
    margin: 50px 0 32px;
  }
`
export const ProductName= styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  /* text-align: center; */
`

export const ProductType= styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
`
export const ProductPrice= styled.div`
  font-size: 1.6rem;
  color: #7d7d7d;
  margin: 12px 0;
  text-align: right;
`
export const ProductDescription= styled.div`
  /* font-family: 'HCo Gotham' !important; */
  font-size: 16px !important;
  color: #919191;
  letter-spacing: 0.5px;
  margin: 32px 0;
  /* font-style: italic; */
`
export const ProductPolicy= styled.div`
  /* margin: 75px 0 30px 0; */
  width: 100%;
  display: flex;
  flex-direction: column;

  /* text-align: right; */
  li {
    list-style-type: none;
    padding: 12px 0 12px;
    letter-spacing: 0.8px;
    font-size: 1rem;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }

  @media only screen and (max-width: 920px) {
    /* display: none; */
    /* display: flex;
    flex-direction: row;
    border: none; */
   } 
`
export const ReviewWrapper = styled.div`
  /* margin: 0px auto 30px; */
  padding: 16px;
  max-width: 1280px;
  width: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    border-right: 1px solid rgba(0,0,0,0.1);
    height: 100%;
    top: 0;
    left: 57%;
  }
`
export const InfoWrapper = styled.div`
  padding: 12px;
  /* border-right: 1px solid rgba(0,0,0,0.2); */
`
export const Title = styled.h3`
  font-size: 1.4rem;
  color: #000;
  font-family: 'Times New Roman', Times, serif !important;
  font-weight: bold;
  text-align: center;
  font-style: italic;
`
export const InfoContent = styled.div`
  font-size: 1.4rem !important;
  text-align: center;
  padding: 0 16px;
`
export const InfoMaterial = styled.div`
  font-size: 1.4rem !important;
  text-align: center;
  padding: 0 16px;

  h4 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.2rem;
  }

  p {
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
  }
`

export const Review = styled.div`
  padding: 0 12px;
`
export const CollapseHeader = styled.div`
  font-size: 1.2rem;
  flex-grow: 1;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
`
export const LabelText = styled.h4`
  font-size: 1.1rem;
  font-weight: 400;
`
export const CommentList = styled.div`
  margin-top: 14px;
  /* display: flex;
  flex-direction: column;  */

  & .ant-comment-inner {
    padding: 16px 0 0;
  }
`
export const CommentsTitle = styled.div`
  /* font-size: 1rem; */
  font-weight: 400;
  display: flex;
  align-items: baseline;
  /* margin-bottom: 10px; */

  /* padding: 8px 0; */
  /* margin-bottom: 8px; */

  h3 {
    font-size: 15px;
    margin: 0 0 0 12px;
  }
`
export const CommentRate = styled.div`
  /* font-size: 1.1rem; */
  /* font-weight: 400; */
`
export const CommentContent = styled.h4`
  margin-top: 4px;
  font-size: 1rem;
  font-weight: 400;
`
export const RelativeProduct = styled.h4`
  margin-top: 40px;
  width: 100%;
  height: 400px;
  /* background-color: #dedede; */

  h4 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
  }

  /* & img {
    width: 80%;
    height: 200px;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  } */
`
// export const NextArrow = styled.h4`
//   margin-top: 4px;
//   font-size: 1rem;
//   font-weight: 400;
// `

// export const PrevArrow = styled.h4`
//   margin-top: 4px;
//   font-size: 1rem;
//   font-weight: 400;
// `
export const SlideWrapper = styled.h4`
  margin-top: 48px;
`
export const ProductCard = styled.div`
  text-align: center;
  cursor: pointer;
  position: relative;
  padding-top: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  img {
    max-width: 100%;
    height: 200px;
    object-fit: cover;
  }

  /* &:hover {
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    transition: all 0.2s;
  } */
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

export const ProductRelativeName = styled.div`
  color: #000;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px 0;
  height: 60px;
`
export const ProductRelativePrice = styled.div`
  color: #767676;
  font-size: 1rem;
  font-style: italic;
  padding-bottom: 8px;
`