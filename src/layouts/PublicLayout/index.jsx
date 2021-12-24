import React from 'react';
import { Route } from "react-router-dom";


import UserHeader from "../UserHeader";
import Footer from "../Footer";

import * as S from './styles'

const PublicLayout = ({component: Component, ...props}) => {
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

export default PublicLayout
