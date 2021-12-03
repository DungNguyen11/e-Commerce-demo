import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
  Row,
  Col,
  Button,
  Input,
  Image,
  notification,
  Form,
} from "antd";

import { setSelectedCartsAction, orderCartAction } from '../../../../../redux/actions';

import * as S from './styles'

const Delivery = ({setCheckoutStep}) => {
  
  const { cartList, selectedCarts} = useSelector((state) => state.cartReducer)
  const { userInfo } = useSelector((state) => state.authReducer)
  
  const [deliveryForm] = Form.useForm();

  const dispatch = useDispatch()

  const renderSelectedCarts = () => {
    return selectedCarts.map((selectedCart) => {
      return (
        <S.CartList key={selectedCart.id}>
        <Image 
          src={selectedCart.product?.image} alt={selectedCart.product?.name}
          width={100}
          height={90}
        />
        <S.ProductInfo>
          <S.ProductHead>
            <S.ProductName>{selectedCart.product?.name}</S.ProductName>
            <S.ProductPrice>
              {`$${selectedCart.product?.price}`}
            </S.ProductPrice>
          </S.ProductHead>
          <S.ProductSize>Size: 100 ml</S.ProductSize>
            <S.Quantity>Quantity: {selectedCart.quantity} </S.Quantity>
        </S.ProductInfo>
      </S.CartList>     
      )
    })
  }

  const totalPrice = selectedCarts.reduce((total, item) => {
    return total + item.product?.price * item.quantity
  }, 0)

  const handleContinueCheckout = (values) => {
    const newValues = {
      // userId: userInfo.data.id, 
      ...values,
      products: selectedCarts.map((cartItem) => {
        return {
          id: cartItem.product?.id,
          name: cartItem.product?.name,
          price: cartItem.product?.price,
          quantity: cartItem.quantity,
        };
      }),
      totalPrice: totalPrice,
    };
    dispatch(orderCartAction(newValues));
  }

  return (
      <S.PageContent>
        <Row gutter={[40,16]}>    
          <Col 
            // pull={1} 
            xs={{ span: 24 }} 
            sm={{ span: 24 }} 
            md={{ span: 24 }} 
            lg={{ span: 14}}
          >  
          <Form
            form={deliveryForm}
            name="deliveryForm"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={(values) => handleContinueCheckout(values)}
          >
            <Form.Item
              label="Name"
              name="fullName"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Input />
            </Form.Item>

            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            {/* <Row gutter={24}>
              <Col span={8}>
                <Form.Item
                  label="Tỉnh/Thành"
                  name=""
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Select>
                    <Select.Option value="Hà Nội">Hà Nội</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Quận/Huyện"
                  name=""
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Select>
                    <Select.Option value="Hà Nội">Hà Nội</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Phường/Xã"
                  name=""
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Select>
                    <Select.Option value="Hà Nội">Hà Nội</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row> */}
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Input />
            </Form.Item>
          </Form>
          </Col>
          <Col 
            // offset={15}
            xs={{ span: 24 }} 
            sm={{ span: 24 }} 
            md={{ span: 24 }} 
            lg={{ span: 10}}
          >
            <S.OrderInfo>
              <S.Bag>
              <h3>MY BAG</h3>
                {renderSelectedCarts()}
              </S.Bag>            
              <S.ProductOrder>
                <h3>ORDER SUMMARY</h3>
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
                  {/* <span>${totalPrice.toFixed(1)}</span> */}
                </S.Total>
                <S.CheckOutBtn>
                  <Button
                    type="primary"
                    block
                    size="large"
                    onClick={() => deliveryForm.submit()}
                  >Continue Checkout</Button>
                </S.CheckOutBtn>
              </S.ProductOrder>
            </S.OrderInfo>
          </Col>               
        </Row>
      </S.PageContent>
  )
}

export default Delivery
