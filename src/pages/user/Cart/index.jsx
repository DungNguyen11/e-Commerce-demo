import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { Steps, Button, Row } from "antd";

import {
  ShoppingCartOutlined,
  EnvironmentOutlined,
  CreditCardOutlined,
  CheckOutlined,
} from "@ant-design/icons";

import * as S from "./styles";
import TopWrapper from "../../../components/TopWrapper";
import { BREADCRUMB } from "./constants";

import { getInfoFormListAction } from "../../../redux/actions";

import Checkout from "./components/Checkout";
import Delivery from "./components/Delivery";
import Payment from "./components/Payment";
import Review from "./components/Review";

import EmptyCartImg from "../../../assets/images/empty_cart.png";

import { ROUTER } from "../../../constants/router";

const CartPage = () => {
  const [checkoutStep, setCheckoutStep] = useState(0);

  const { cartList } = useSelector((state) => state.cartReducer);
  const { userInfo } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  const history = useHistory();
  const { state } = useLocation();

  useEffect(() => {
    setCheckoutStep(state.checkoutStep)
  }, [state])

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(
        getInfoFormListAction({
          userId: userInfo.data.id,
        })
      );
    }
  }, [userInfo.data.id]);

  return (
    <>
      <TopWrapper breadcrumb={BREADCRUMB} />
      {!!cartList.data.length ? (
        <S.CartContainer>
          <Steps
            current={checkoutStep}
            style={{ padding: "20px", margin: "16px 0" }}
          >
            <Steps.Step title="Cart" icon={<ShoppingCartOutlined />} />
            <Steps.Step title="Delivery" icon={<EnvironmentOutlined />} />
            <Steps.Step title="Payment" icon={<CreditCardOutlined />} />
            <Steps.Step title="Review" icon={<CheckOutlined />} />
          </Steps>
          {checkoutStep === 0 && <Checkout setCheckoutStep={setCheckoutStep} />}
          {checkoutStep === 1 && <Delivery setCheckoutStep={setCheckoutStep} />}
          {checkoutStep === 2 && <Payment setCheckoutStep={setCheckoutStep} />}
          {checkoutStep === 3 && <Review setCheckoutStep={setCheckoutStep} />}
        </S.CartContainer>
      ) : (
        <div>
          <Row style={{margin: "30px 0"}} justify="center">
            <img src={EmptyCartImg} alt="" />
          </Row>
          <Row justify="center">
            <Button 
              onClick={() => history.push(ROUTER.USER.HOME)}
            >Go to HomePage</Button>
          </Row>
        </div>
      )}
    </>
  );
};

export default CartPage;
