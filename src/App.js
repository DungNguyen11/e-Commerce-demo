import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import LoginAndRegisterRoute from "./layouts/LoginAndRegisterRoute";

import LoginAndRegisterPage from './pages/LoginAndRegister';
import HomePage from "./pages/user/Home";
import AllProductPage from './pages/user/AllProductList'
import ProductDetailPage from './pages/user/ProductDetail';
import CartPage  from './pages/user/Cart';

import { ROUTER } from "./constants/router";

import { getCartListAction } from "../src/redux/actions/cart.action";

import 'antd/dist/antd.less'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.less';
import { getUserInfoAction } from "./redux/actions";
function App() {

  const dispatch = useDispatch();

  const { cartList } = useSelector((state) => state.cartReducer)

  useEffect(() => {
    // if(getUserInfoAction.data.id) {}
    dispatch(getCartListAction())
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout 
          exact
          path={ROUTER.USER.HOME}
          component={HomePage}
        />
        <DefaultLayout 
          exact
          path={ROUTER.USER.ALL_PRODUCT_LIST}
          component={AllProductPage}
        />
        <DefaultLayout 
          exact
          path={ROUTER.USER.PRODUCT_DETAIL}
          component={ProductDetailPage}
        />
          <DefaultLayout 
          exact
          path={ROUTER.USER.CART}
          component={CartPage}
        />
        <LoginAndRegisterRoute 
          exact
          path={ROUTER.LOGIN_REGISTER}
          component={LoginAndRegisterPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
