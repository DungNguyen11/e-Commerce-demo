import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Steps } from "antd";

import {
  ShoppingCartOutlined,
  EnvironmentOutlined,
  CreditCardOutlined,
  CheckOutlined, 
} from "@ant-design/icons";

import * as S from './styles'
import TopWrapper from "../../../components/TopWrapper";
import { BREADCRUMB } from "./constants";

import Checkout from "./components/Checkout";
import Delivery from "./components/Delivery";

const CartPage = () => {
  const [checkoutStep, setCheckoutStep] = useState(0)

  return (
    <>
    {/* <S.PageTitle>
        <h4>SHOPPING BAG</h4>
    </S.PageTitle> */}
    <TopWrapper breadcrumb={BREADCRUMB} />
    <S.CartContainer>
      <Steps current={checkoutStep} style={{padding: "20px", margin: "16px 0"}}>
        <Steps.Step title="Cart" icon={<ShoppingCartOutlined/>} />
        <Steps.Step title="Delivery" icon={<EnvironmentOutlined/>} />
        <Steps.Step title="Payment" icon={<CreditCardOutlined/>} />
        <Steps.Step title="Review" icon={<CheckOutlined/>} />        
      </Steps>
      {checkoutStep === 0 && <Checkout setCheckoutStep={setCheckoutStep}/>}
      {checkoutStep === 1 && <Delivery setCheckoutStep={setCheckoutStep}/>}
      
    </S.CartContainer>
    </>
  )
}

export default CartPage
