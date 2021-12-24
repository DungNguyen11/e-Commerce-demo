import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { ROUTER } from "../../../../../constants/router";

import {
  Row,
  Col,
  Button,
  Input,
  Checkbox,
  notification,
  Popconfirm,
  Skeleton
} from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

import {
  updateCartAction,
  removeCartAction,
  setSelectedCartsAction,
  checkDiscountAction,
  updateSelectedCartsAction,
} from "../../../../../redux/actions";

import * as S from "./styles";

const Checkout = ({ setCheckoutStep }) => {
  const { cartList, selectedCarts } = useSelector((state) => state.cartReducer);
  const { discountInfo } = useSelector((state) => state.discountReducer);

  let totalPrice = 0;

  const [discountCode, setDiscountCode] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChangeQuantity = (id, quantity) => {
    dispatch(
      updateCartAction({
        data: {
          quantity,
          id,
        },
      })
    );
    if(selectedCarts.length > 0) {
      dispatch(
        updateSelectedCartsAction({
          data: {
            quantity,
            id,
          },
        })
      );
    } 
  };

  const handleDeleteCartProduct = (id) => {
    dispatch(removeCartAction({ id }));
  };

  const handleSelectCart = (e, item) => {
    const { checked } = e.target;
    if (checked) {
      dispatch(setSelectedCartsAction([...selectedCarts, item]));
    } else {
      const newSelectedCarts = selectedCarts.filter(
        (selectedCart) => selectedCart.id !== item.id
      );
      dispatch(setSelectedCartsAction(newSelectedCarts));
    }
  };

  const handleSelectAll = (e) => {
    const { checked } = e.target;
    if (checked) {
      dispatch(setSelectedCartsAction([...cartList.data]));
    } else {
      dispatch(setSelectedCartsAction([]));
    }
  };

  const handleCheckout = () => {
    if (!selectedCarts.length) {
      notification.error({
        message: "Please select at least one product",
      });
    } else {
      setCheckoutStep(1);
    }
  };

  const handleCheckDiscount = () => {
    dispatch(checkDiscountAction({ code: discountCode }));
  };

  const renderCartList = () => {
    return cartList.data.map((cartItem) => {
      const isChecked =
        selectedCarts.findIndex(
          (selectedCarts) => selectedCarts.id === cartItem.id
        ) !== -1;

      const unitPrice = cartItem.productOption
        ? cartItem.productOption?.price + cartItem.product?.price
        : cartItem.product?.price;

      const cartItemPrice = unitPrice * cartItem.quantity;
      totalPrice += isChecked ? cartItemPrice : 0;
      return (
        <S.CartList key={cartItem.id}>
          <S.Checkbox>
            <Checkbox
              onChange={(e) => handleSelectCart(e, cartItem)}
              checked={isChecked}
            />
          </S.Checkbox>
          <S.Img
            src={cartItem.product?.image}
            alt={cartItem.product?.name}
            // width={160}
            // height={140}
          />
          <S.ProductInfo>
            <S.ProductHead>
              <S.ProductName>{cartItem.product?.name}</S.ProductName>
              <S.ProductPrice>{`$${cartItemPrice}`}</S.ProductPrice>
            </S.ProductHead>
            <S.ProductSize>
              Size: {cartItem.productOption && cartItem.productOption?.name}
            </S.ProductSize>
            <S.ProductBottom>
              <S.QuantityInput>
                <Input.Group compact>
                  <Button
                    icon={<MinusOutlined />}
                    onClick={() => {
                      if (cartItem.quantity > 1) {
                        handleChangeQuantity(
                          cartItem.id,
                          cartItem.quantity - 1
                        );
                      } else {
                        return (
                          <Popconfirm
                            title="Are you sure to delete this product?"
                            onConfirm={handleDeleteCartProduct(cartItem.id)}
                            okText="Yes"
                            cancelText="No"
                          ></Popconfirm>
                        );
                      }
                    }}
                  />
                  <Input
                    style={{ width: "20%", textAlign: "center" }}
                    min={1}
                    value={cartItem.quantity}
                  ></Input>
                  <Button
                    icon={<PlusOutlined />}
                    onClick={() =>
                      handleChangeQuantity(cartItem.id, cartItem.quantity + 1)
                    }
                  />
                </Input.Group>
              </S.QuantityInput>
              <Button
                onClick={() => handleDeleteCartProduct(cartItem.id)}
                size="large"
                style={{ width: "80" }}
                type="text"
                ghost
                icon={<DeleteOutlined />}
              ></Button>
            </S.ProductBottom>
          </S.ProductInfo>
        </S.CartList>
      );
    });
  };

  return (
    <S.PageContent>
      <Row gutter={[40, 16]}>
        {cartList.loading ? ( 
          <Skeleton active />
        ) : (
          <Col
          // pull={1}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 16 }}
        >
          {renderCartList()}
          <Checkbox
            indeterminate={
              selectedCarts.length > 0 &&
              selectedCarts.length < cartList.data.length
            }
            checked={selectedCarts.length === cartList.data.length}
            onChange={(e) => handleSelectAll(e)}
          >
            Select All
          </Checkbox>
        </Col>
        )}   
        <Col
          // offset={15}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 8 }}
        >
          <S.ProductOrder>
            <S.Promo>
              <h3>Do you have a Promo Code?</h3>
              <Input.Group>
                <Input
                  style={{ width: "calc(100% - 90px)" }}
                  placeholder="Enter Code"
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
                <Button
                  type="primary"
                  style={{ width: 90 }}
                  onClick={() => handleCheckDiscount()}
                >
                  Apply
                </Button>
              </Input.Group>
            </S.Promo>
            {discountInfo.data.code && (
              <S.DiscountCard>
                <p>{discountInfo.data.code}</p>
                <S.DiscountValue>
                  <span>{`${discountInfo.data.discountValue}%`} </span>
                  <span>OFF</span>
                </S.DiscountValue>
              </S.DiscountCard>
            )}

            <S.Subtotal>
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(1)}</span>
            </S.Subtotal>
            <S.Discount>
              <span>Discount:</span>
              <span>
                {discountInfo.data.code
                  ? `- $${(
                      (totalPrice * discountInfo.data.discountValue) /
                      100
                    ).toFixed(1)}`
                  : `$0`}
              </span>
            </S.Discount>
            <S.Shipping>
              <span>Shipping:</span>
              <span>Free</span>
            </S.Shipping>
            <S.Total>
              <span>Order total:</span>
              <span>
                {`$${(
                  totalPrice -
                  (totalPrice * (discountInfo.data.discountValue / 100) || 0)
                ).toFixed(1)}`}
              </span>
            </S.Total>
            <S.CheckOutBtn>
              <Button
                type="primary"
                ghost
                block
                style={{ marginBottom: "16px" }}
                size="large"
                onClick={() => history.push(ROUTER.USER.ALL_PRODUCT_LIST)}
              >
                Continue Shopping
              </Button>
              <Button
                type="primary"
                block
                size="large"
                onClick={() => handleCheckout()}
              >
                Check out
              </Button>
            </S.CheckOutBtn>
          </S.ProductOrder>
        </Col>
      </Row>
    </S.PageContent>
  );
};

export default Checkout;
