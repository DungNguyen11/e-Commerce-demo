import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
  Row,
  Col,
  Rate,
  Radio,
  Button,
  Input,  
} from "antd";
import {DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

import { updateCartAction, removeCartAction } from '../../../redux/actions';

import * as S from './styles'

const CartPage = () => {

  const { cartList } = useSelector((state) => state.cartReducer)

  const dispatch = useDispatch()

  const handleChangeQuantity = (id, quantity) => {
    dispatch(updateCartAction({ 
      data: {
        quantity,
        id
      },
     }))
  }

  const handleDeleteCartProduct = (id) => {
    dispatch(removeCartAction({ id }))
  }

  const renderSubtotal = () => {
    let total = 0;
    cartList.data.forEach((cartItem) => {
      total = total + (cartItem.product?.price * cartItem.quantity) 
    })
    return total.toFixed(1);
  }

  const renderCartList = () => {
    return cartList.data.map((cartItem) => {
      return (
      <S.CartList key={cartItem.id}>
        <S.ProductImg>
            <img src={cartItem.product?.image} alt="" />
        </S.ProductImg>
        <S.ProductInfo>
          <S.ProductHead>
            <S.ProductName>{cartItem.product?.name}</S.ProductName>
            <S.ProductPrice>
              {`$${cartItem.product?.price}`}
            </S.ProductPrice>
          </S.ProductHead>
          <S.ProductSize>Size: 100 ml</S.ProductSize>
          <S.ProductBottom>
            <S.QuantityInput>
            <Input.Group compact>
              <Button
               icon={<MinusOutlined />} 
               onClick={() => handleChangeQuantity(cartItem.id, cartItem.quantity - 1) }
               />
              <Input style={{width: '20%', textAlign: 'center'}} value={cartItem.quantity}></Input>
              <Button 
              icon={<PlusOutlined /> } 
              onClick={() => handleChangeQuantity(cartItem.id, cartItem.quantity + 1)}
              />
            </Input.Group>
            </S.QuantityInput>
            <Button 
            onClick={() => handleDeleteCartProduct(cartItem.id)}
            size="large" style={{width: "80"}} type="text" ghost icon={<DeleteOutlined />}></Button>
          </S.ProductBottom>
        </S.ProductInfo>
      </S.CartList>     
      )
    })
  }

  return (
    <>
    <S.PageTitle>
        <h4>SHOPPING BAG</h4>
      </S.PageTitle>
    <S.CartContainer>
      <S.PageContent>
        <Row gutter={[40,16]}>    
          <Col 
            // pull={1} 
            xs={{ span: 24 }} 
            sm={{ span: 24 }} 
            md={{ span: 24 }} 
            lg={{ span: 16}}
          >       
            {renderCartList()}  
          </Col>
          <Col 
            // offset={15}
            xs={{ span: 24 }} 
            sm={{ span: 24 }} 
            md={{ span: 24 }} 
            lg={{ span: 8}}
          >
            <S.ProductOrder>
              <S.Subtotal>
                <span>Subtotal:</span>
                <span>${renderSubtotal()}</span>
              </S.Subtotal>
              <S.Shipping>
              <span>Shipping:</span>
              <span>Free</span>
              </S.Shipping>
              <S.Total>
                <span>Order total:</span>
                <span>${renderSubtotal()}</span>
              </S.Total>
              <S.CheckOutBtn>
                <Button
                  type="primary"
                  block
                  size="large"
                >Check out</Button>
              </S.CheckOutBtn>
            </S.ProductOrder>
          </Col>               
        </Row>
      </S.PageContent>
    </S.CartContainer>
    </>
  )
}

export default CartPage
