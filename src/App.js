import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";

import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import LoginAndRegisterRoute from "./layouts/LoginAndRegisterRoute";

import LoginAndRegisterPage from "./pages/LoginAndRegister";
import HomePage from "./pages/user/Home";
import AllProductPage from "./pages/user/AllProductList";
import ToiletteProductPage from "./pages/user/AllProductList/ToiletteProduct";
import ParfumProductPage from "./pages/user/AllProductList/ParfumProduct";
import CandleProductPage from "./pages/user/AllProductList/CandleProduct";

import ProductDetailPage from "./pages/user/ProductDetail";
import CartPage from "./pages/user/Cart";
import ProfilePage from "./pages/user/Profile";
import AboutUsPage from "./pages/user/AboutUs";
import CustomerCarePage from "./pages/user/CustomerCare";

import { ROUTER } from "./constants/router";

import {
  getUserInfoAction,
  getCartListAction,
} from "../src/redux/actions/";

import "antd/dist/antd.less";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-lightbox/style.css";
import "./App.less";
function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.authReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const localStorageUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (localStorageUserInfo) {
      const decodedUserData = jwtDecode(localStorageUserInfo.accessToken);
      dispatch(getUserInfoAction({ id: decodedUserData.sub }));
    }
  }, []);

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(
        getCartListAction({
          userId: userInfo.data.id,
        })
      );
    }
  }, [userInfo.data.id]);

  return (
    <>
      <Switch>
        <PublicLayout exact path={ROUTER.USER.HOME} component={HomePage} />
        <PublicLayout
          exact
          path={ROUTER.USER.ALL_PRODUCT_LIST}
          component={AllProductPage}
        />
        <PublicLayout
          exact
          path={ROUTER.USER.TOILETTE_PRODUCT_LIST}
          component={ToiletteProductPage}
        />
        <PublicLayout
          exact
          path={ROUTER.USER.PARFUM_PRODUCT_LIST}
          component={ParfumProductPage}
        />
        <PublicLayout
          exact
          path={ROUTER.USER.CANDLE_PRODUCT_LIST}
          component={CandleProductPage}
        />
        <PublicLayout
          exact
          path={ROUTER.USER.PRODUCT_DETAIL}
          component={ProductDetailPage}
        />
        <PublicLayout
          exact
          path={ROUTER.ABOUT_US}
          component={AboutUsPage}
        />
        <PublicLayout
          exact
          path={ROUTER.CUSTOMER_CARE}
          component={CustomerCarePage}
        />
        <PrivateLayout exact path={ROUTER.USER.CART} component={CartPage} />
        <PrivateLayout
          exact
          path={ROUTER.USER.PROFILE}
          component={ProfilePage}
        />
        <LoginAndRegisterRoute
          exact
          path={ROUTER.LOGIN_REGISTER}
          component={LoginAndRegisterPage}
        />
      </Switch>
    </>
  );
}

export default App;
