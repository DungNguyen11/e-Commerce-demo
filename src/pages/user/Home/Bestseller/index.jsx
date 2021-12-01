import React, {useEffect} from 'react'
import * as S from './styles'
import {Row, Col } from 'antd';

import { useDispatch, useSelector } from "react-redux";
import { generatePath, useHistory } from 'react-router';

import { getProductListAction } from '../../../../redux/actions';

import { PAGE_SIZE } from "../../../../constants/pagination";
import { ROUTER } from '../../../../constants/router';

const BestSeller = () => {
  
  const { productList } = useSelector((state) => state.productReducer);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductListAction({limit: 15}))
  }, [])

  const renderBestSeller = () => {
    const bestSellerList = 
      productList.data.filter((productItem, productIndex) => productItem.isBestSeller === true )
    return bestSellerList.map((bestSellerItem, bestSellerIndex) => {
      return (
        <Col 
          key={bestSellerIndex}
          xs={{ span: 12 }} 
          sm={{ span: 8 }} 
          md={{ span: 6 }} 
          lg={{ span: 6 }}
        >
          <S.ProductCard >
            {(bestSellerItem.isBestSeller) && <S.BestSeller>Best Seller</S.BestSeller>}
            <img src={bestSellerItem.image} alt="" />
            <S.ProductName>{bestSellerItem.name}</S.ProductName>
            <S.ProductPrice>{`$${bestSellerItem.price}`}</S.ProductPrice>
          </S.ProductCard>
        </Col>
      )
    })
  }
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>BEST SELLERS
        </S.Title>
      </S.TitleWrapper>
      <S.ProductWrapper>
        <Row gutter={[16, 16]} style={{marginBottom : 32}} >
          {renderBestSeller()}
        </Row>  
      </S.ProductWrapper>
      <S.Button
      onClick={() => history.push(ROUTER.USER.ALL_PRODUCT_LIST)}
      >
        View all
      </S.Button>
    </S.Container>
  )
}

export default BestSeller
