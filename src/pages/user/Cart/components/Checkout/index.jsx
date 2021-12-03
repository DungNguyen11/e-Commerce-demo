import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
  Row,
  Col,
  Button,
  Input,
  Image,
  Checkbox,
  notification,
} from "antd";
import {DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

import { updateCartAction, removeCartAction, setSelectedCartsAction } from '../../../../../redux/actions';

import * as S from './styles'

const Checkout = ({ setCheckoutStep }) => {
  
  const { cartList, selectedCarts} = useSelector((state) => state.cartReducer)
  
  let totalPrice = 0;

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

  const handleSelectCart = (e, item) => {
    const { checked } = e.target;
    if(checked) {
      dispatch(setSelectedCartsAction([...selectedCarts, item ]))
    } else {
      const newSelectedCarts = 
        selectedCarts.filter((selectedCart) => selectedCart.id !== item.id )
      dispatch(setSelectedCartsAction(newSelectedCarts))
    }
  }

  const handleSelectAll = (e) => {
    const { checked } = e.target;
    if(checked) {
      dispatch(setSelectedCartsAction([...cartList.data]))
    } else {
      dispatch(setSelectedCartsAction([]))
    }
  }
  
  const handleCheckout = () => {
    if(!selectedCarts.length) {
      notification.error({
        message: "Please select at least one product"
      })
    } else {
      setCheckoutStep(1)
    }
  }

  const renderCartList = () => {
    return cartList.data.map((cartItem) => {
      const isChecked = 
        selectedCarts.findIndex( 
          (selectedCarts) => selectedCarts.id === cartItem.id 
        ) !== -1;

        totalPrice += isChecked ? cartItem.product?.price * cartItem.quantity : 0
      return (
      <S.CartList key={cartItem.id}>
        <S.Checkbox>
          <Checkbox 
            onChange={(e) => handleSelectCart(e, cartItem )}
            checked={isChecked}
          />
        </S.Checkbox>
        <Image 
          src={cartItem.product?.image} alt={cartItem.product?.name}
          width={160}
          height={140}
        />
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
              <Input style={{width: '20%', textAlign: 'center'}} min={1} value={cartItem.quantity}></Input>
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
            <Checkbox
              indeterminate= {
                selectedCarts.length > 0 && 
                selectedCarts.length < cartList.data.length
              }
              checked={selectedCarts.length === cartList.data.length }
              onChange={(e) => handleSelectAll(e)}
            >Select All</Checkbox>  
          </Col>
          <Col 
            // offset={15}
            xs={{ span: 24 }} 
            sm={{ span: 24 }} 
            md={{ span: 24 }} 
            lg={{ span: 8}}
          >
            <S.ProductOrder>
              <S.Promo>
                <h3>Do you have a Promo Code?</h3>
                <Input.Group>
                  <Input
                    style={{ width: "calc(100% - 90px)"}}
                    placeholder="Enter Code"
                  />
                  <Button type="primary" style={{ width: 90 }}>
                    Apply
                  </Button>
                </Input.Group>
              </S.Promo>
              <S.Subtotal>
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(1)}</span>
              </S.Subtotal>
              <S.Shipping>
              <span>Shipping:</span>
              <span>Free</span>
              </S.Shipping>
              <S.Total>
                <span>Order total:</span>
                <span>${totalPrice.toFixed(1)}</span>
              </S.Total>
              <S.CheckOutBtn>
                <Button
                  type="primary"
                  block
                  size="large"
                  onClick={() => handleCheckout()}
                >Check out</Button>
              </S.CheckOutBtn>
            </S.ProductOrder>
          </Col>               
        </Row>
      </S.PageContent>
  )
}

export default Checkout
