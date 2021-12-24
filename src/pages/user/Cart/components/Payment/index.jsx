import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Row,
  Col,
  Button,
  Form,
  Radio,
  Space,
  Card,
} from "antd";
import {
  ShopOutlined,
  EnvironmentOutlined,
  DollarCircleOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

import { orderCartAction } from "../../../../../redux/actions";

import * as S from "./styles";

const Delivery = ({ setCheckoutStep }) => {
  const { selectedCarts } = useSelector((state) => state.cartReducer);
  const { userInfo } = useSelector((state) => state.authReducer);
  const { orderInfo } = useSelector((state) => state.orderReducer);
  const { discountInfo } = useSelector((state) => state.discountReducer);

  const [paymentForm] = Form.useForm();

  const dispatch = useDispatch();

  const renderSelectedCarts = () => {
    return selectedCarts.map((selectedCart) => {
      const unitPrice = selectedCart.productOption
        ? selectedCart.productOption?.price + selectedCart.product?.price
        : selectedCart.product?.price;

      const cartItemPrice = unitPrice * selectedCart.quantity;
      return (
        <S.CartList key={selectedCart.id}>
          <S.Img
            src={selectedCart.product?.image}
            alt={selectedCart.product?.name}
          />
          <S.ProductInfo>
            <S.ProductHead>
              <S.ProductName>{selectedCart.product?.name}</S.ProductName>
              <S.ProductPrice>{`$${cartItemPrice}`}</S.ProductPrice>
            </S.ProductHead>
            <S.ProductSize>
              {selectedCart.productOption &&
                `Size: ${selectedCart.productOption?.name}`}
            </S.ProductSize>
            <S.Quantity>Quantity: {selectedCart.quantity} </S.Quantity>
          </S.ProductInfo>
        </S.CartList>
      );
    });
  };

  const totalPrice = selectedCarts.reduce((total, item) => {
    const unitPrice = item.productOption
      ? item.productOption?.price + item.product?.price
      : item.product?.price;
    return total + unitPrice * item.quantity;
  }, 0);

  const handleConfirmPayment = (values) => {
    const newValues = {
      userId: userInfo.data.id,
      ...orderInfo,
      ...values,
      products: selectedCarts.map((cartItem) => {
        return {
          id: cartItem.product?.id,
          cartId: cartItem.id,
          name: cartItem.product?.name,
          price: cartItem.product?.price,
          quantity: cartItem.quantity,
          optionName: cartItem.productOption?.name,
          optionPrice: cartItem.productOption?.price,
        };
      }),
      totalPrice: totalPrice,
    };
    dispatch(
      orderCartAction({
        data: newValues,
        callback: {
          success: () => setCheckoutStep(3),
        },
      })
    );
  };

  return (
    <S.PageContent>
      <Row gutter={[40, 16]}>
        <Col
          // pull={1}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 14 }}
        >
          <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
            1. Contact Information
          </h3>
          <Card size="middle" style={{ marginBottom: "32px" }}>
            <Row justify="space-between">
              <S.LabelInfo>Name</S.LabelInfo>
              <S.Info>{orderInfo.fullName}</S.Info>
            </Row>
            <Row justify="space-between">
              <S.LabelInfo>Phone Number</S.LabelInfo>
              <S.Info>{orderInfo.phoneNumber}</S.Info>
            </Row>
            <Row justify="space-between">
              <S.LabelInfo>Shipping Address</S.LabelInfo>
              <S.Info>
                {`${orderInfo.address}, ${orderInfo.ward}, ${orderInfo.district},
                ${orderInfo.city}`}
              </S.Info>
            </Row>
          </Card>
          <Form
            form={paymentForm}
            name="paymentForm"
            layout="vertical"
            initialValues={{ delivery: "delivery", paymentType: "cod" }}
            onFinish={(values) => handleConfirmPayment(values)}
          >
            <h3 style={{ fontSize: "22px", marginBottom: "32px" }}>
              2. Select Delivery Method
            </h3>
            <Form.Item name="delivery">
              <Radio.Group>
                <S.RadioBtnWrapper>
                <Radio.Button
                  // style={{
                  //   width: "200px",
                  //   height: "50px",
                  //   borderRadius: "15px",
                  // }}
                  value="delivery"
                >
                  <div style={{ padding: "9px", fontSize: "18px" }}>
                    <EnvironmentOutlined style={{ fontSize: "26px" }} />{" "}
                    Delivery
                  </div>
                </Radio.Button>
                <Radio.Button
                  // style={{
                  //   width: "200px",
                  //   height: "50px",
                  //   marginLeft: "16px",
                  //   borderRadius: "15px",
                  // }}
                  value="store"
                >
                  <div style={{ padding: "9px", fontSize: "18px" }}>
                    <ShopOutlined style={{ fontSize: "26px" }} /> Store
                  </div>
                </Radio.Button>
                </S.RadioBtnWrapper>
              </Radio.Group>
            </Form.Item>

            <h3 style={{ fontSize: "22px", margin: "32px 0" }}>
              3. Select Payment Method
            </h3>
            <Form.Item name="paymentType">
              <Radio.Group>
                <Row gutter={24}>
                  <Col 
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 12 }}
                  >
                    <Space direction="vertical">
                      <Radio
                        style={{
                          width: "250px",
                          height: "40px",
                          fontSize: "18px",
                        }}
                        value="cod"
                      >
                        <DollarCircleOutlined /> Cash
                      </Radio>
                      <Radio
                        style={{
                          width: "250px",
                          height: "40px",
                          fontSize: "18px",
                        }}
                        value="card"
                      >
                        <CreditCardOutlined /> Credit or Debit Card
                      </Radio>
                      
                    </Space>
                  </Col>
                  <Col 
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 12 }}
                  >
                    <Space direction="vertical">
                      <Radio
                        style={{
                          width: "250px",
                          height: "40px",
                          fontSize: "18px",
                        }}
                        value="paypal"
                      >
                        PayPal
                      </Radio>
                      <Radio
                        style={{
                          width: "250px",
                          height: "40px",
                          fontSize: "18px",
                        }}
                        value="other"
                      >
                        Other
                      </Radio>
                    </Space>
                  </Col>
                </Row>
              </Radio.Group>
            </Form.Item>
          </Form>
        </Col>
        <Col
          // offset={15}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 10 }}
        >
          <S.OrderInfo>
            <S.Bag>
              <S.BagTitle>
                <h3>MY BAG {`(${selectedCarts.length})`}</h3>
                <span onClick={() => setCheckoutStep(0)}>Edit</span>
              </S.BagTitle>
              {renderSelectedCarts()}
            </S.Bag>
            <S.ProductOrder>
              <h3>ORDER SUMMARY</h3>
              <S.SummaryItem>
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(1)}</span>
              </S.SummaryItem>
              <S.SummaryItem>
                <span>Discount:</span>
                <span>
                  {discountInfo.data.code
                    ? `- $${(
                        (totalPrice * discountInfo.data.discountValue) /
                        100
                      ).toFixed(1)}`
                    : `$0`}
                </span>
              </S.SummaryItem>
              <S.SummaryItem>
                <span>Shipping:</span>
                <span>Free</span>
              </S.SummaryItem>
              <S.Total>
                <span>Order total:</span>
                <span>
                  {discountInfo.data.code
                    ? `$${(
                        totalPrice -
                          (totalPrice * discountInfo.data.discountValue) /
                            100 || 0
                      ).toFixed(1)}`
                    : `$${totalPrice.toFixed(1)}`}
                </span>
              </S.Total>
              <S.CheckOutBtn>
                <Button
                  type="primary"
                  ghost
                  size="large"
                  style={{ marginBottom: "12px", width: "100%" }}
                  onClick={() => setCheckoutStep(1)}
                >
                  Return
                </Button>
                <Button
                  type="primary"
                  block
                  size="large"
                  onClick={() => paymentForm.submit()}
                >
                  Confirm and Continue
                </Button>
              </S.CheckOutBtn>
            </S.ProductOrder>
          </S.OrderInfo>
        </Col>
      </Row>
    </S.PageContent>
  );
};

export default Delivery;
