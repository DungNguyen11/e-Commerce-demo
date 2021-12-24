import React from 'react';
import { Route, Redirect } from "react-router-dom";

import UserHeader from "../UserHeader";
import Footer from "../Footer";

import { ROUTER } from "../../constants/router";

import * as S from './styles'

const PrivateLayout = ({component: Component, ...props}) => {

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if(!userInfo) {
      return <Redirect to={ROUTER.LOGIN_REGISTER} />
    }

  return (
    <Route
      {...props} 
      render={(routeProps) => (
        <>
          <UserHeader/>
          <S.MainWrapper>
          <Component {...routeProps} />
          </S.MainWrapper>
          <Footer/>
        </>
      )}
    >     
    </Route>
  )
}

export default PrivateLayout
