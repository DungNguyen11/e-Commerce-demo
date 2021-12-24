import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, generatePath } from "react-router-dom";

import { Col, Row, Skeleton } from "antd";

import { getFavoriteListAction } from "../../../../../redux/actions";

import { ROUTER } from "../../../../../constants/router";

import * as S from "./styles";

const WishList = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.authReducer);
  const { favoriteList } = useSelector((state) => state.favoriteReducer);
  console.log(favoriteList.data)

  const history = useHistory();

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getFavoriteListAction({ 
        userId: userInfo.data.id,
     }));
    }
  }, [userInfo.data]);

  const renderWishlist = () => {

    return favoriteList.data.map((favoriteItem, favoriteIndex) => {
      return (
        <Col 
          key={favoriteIndex}
          xs={{ span: 24 }} 
          sm={{ span: 12 }} 
          md={{ span: 12 }} 
          lg={{ span: 8 }}
        >
          <S.ProductCard 
            onClick={() => history.push(
              generatePath(ROUTER.USER.PRODUCT_DETAIL, { id: favoriteItem.product?.id})
            )}
          >
            {(favoriteItem.product?.isBestSeller) && <S.BestSeller>Best Seller</S.BestSeller>}
            <img src={favoriteItem.product?.image} alt="" />
            <S.ProductName>{favoriteItem.product?.name}</S.ProductName>
            <S.ProductPrice>{`$${favoriteItem.product?.price}`}</S.ProductPrice>
          </S.ProductCard>
        </Col>
      )
    })
  }
  return (
    <div>
      <h3>Wish List</h3>
      <Row gutter={[0, 16]}>
        {favoriteList.loading ? (
          <Skeleton active />
        ): (renderWishlist())}
   
      </Row>
    </div>
  );
};

export default WishList;
