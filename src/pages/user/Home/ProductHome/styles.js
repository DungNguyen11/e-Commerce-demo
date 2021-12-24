import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 24px;
  margin: 40px 0;
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

  @media only screen and (max-width: 376px) {
    width: 100%;
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
export const ProductItem = styled.div`
  position: relative;
  padding-top: 100%;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;

  img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
    transition: all 0.6s ease-in-out 0s;
    filter: brightness(70%);
  }

  &:hover img {
    transform: scale(1.1);
    filter: brightness(90%);
  }
`

export const ItemContent = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    font-weight: 600;
    font-size: 1.6rem;
    text-align: center;
    color: #fff;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
`
