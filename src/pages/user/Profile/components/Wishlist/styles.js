import styled, { css } from "styled-components";

export const ProductCard = styled.div`
  position: relative;
  background-color: #fff;
  padding: 6px;
  margin: 0 12px;
  text-align: center;
  cursor: pointer;

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
  width: 88px;
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
