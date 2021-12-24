import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { ROUTER } from "../../../../../constants/router";

import {
  Row,
  Col,
  Button,
} from "antd";

import * as S from "./styles";

const Review = ({setCheckoutStep}) => {

  const history = useHistory();

  const { currentOrder } = useSelector((state) => state.orderReducer);
  const { discountInfo } = useSelector((state) => state.discountReducer);

  const renderOrderProduct = () => {
    return currentOrder.products.map((productItem) => {
      const unitPrice = productItem.optionPrice + productItem.price;
      const productItemPrice = unitPrice * productItem.quantity;
      return (
        <S.CartList key={productItem.id}>
          <S.ProductInfo>
            <S.ProductHead>
              <S.ProductName>{productItem.name}</S.ProductName>
              <S.ProductPrice>{`$${productItemPrice}`}</S.ProductPrice>
            </S.ProductHead>
            <S.ProductSize>
              {productItem.optionName &&
                `Size: ${productItem.optionName}`}
            </S.ProductSize>
            <S.Quantity>Quantity: {productItem.quantity} </S.Quantity>
          </S.ProductInfo>
        </S.CartList>
      );
    });
  };

  return (
    <div>
      <S.PageContent>
        <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
          Your Order
        </h3>
        <Row>
          <Col 
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 16, offset: 4 }}
          >
            <S.ListWrapper>
            {renderOrderProduct()}     
              <S.OrderSummary>
                <S.Discount>
                  <span>Discount:</span>
                    <S.DiscountValue>
                      {`${discountInfo.data.discountValue}% off`}
                    </S.DiscountValue>
                </S.Discount>
                <S.TotalPrice>
                  <span>Total Price:</span>
                  <span>${currentOrder.totalPrice.toFixed()}</span>
                </S.TotalPrice>
              </S.OrderSummary>
            </S.ListWrapper>
          </Col>
        
        </Row>
        <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
          Your Delivery Information
        </h3>
        <Row>
        <Col 
           xs={{ span: 24 }}
           sm={{ span: 24 }}
           md={{ span: 24 }}
           lg={{ span: 16,  offset: 4 }}
        >
          <S.InfoFormItem>
            <S.InfoHead>
              <S.InfoName>{currentOrder.fullName}</S.InfoName>
            </S.InfoHead>
            <S.InfoItem>
              <span>Shipping Address:</span>
              <h4>{`${currentOrder.address}, ${currentOrder.ward}, ${currentOrder.district}, ${currentOrder.city}`} </h4>
            </S.InfoItem>
            <S.InfoItem>
              <span>Phone Number:</span>
              <h4>{currentOrder.phoneNumber}</h4>
            </S.InfoItem>
            <S.InfoItem>
              <span>Email:</span>
              <h4>{currentOrder.email}</h4>
            </S.InfoItem>
          </S.InfoFormItem>
          </Col>
        </Row>
      </S.PageContent>
      <Row justify='center'>
        <S.Bottom>Thank you for your purchase!</S.Bottom>
        <S.Bottom>We hope you enjoy our services!</S.Bottom>
      </Row>
      <Row justify='center'> 
        <Button onClick={() => history.push(ROUTER.USER.ALL_PRODUCT_LIST)}>
          Continue Shopping
        </Button>
      </Row>  
    </div>
  )
}

export default Review
