import React from 'react'
import * as S from './styles'
import { Row, Col } from "antd";

const ProductHome = () => {
  const img1 = 'https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/NouvelleNAV2020/_JFS8016_847x407.jpg.webp?frz-v=201'
  const img2 = 'https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/Brand-pages/EDT_g_n_rique.jpg.webp?frz-v=201'
  const img3 = 'https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/HP_Holidays21/2_1.png.webp?frz-v=201'

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>OUR PRODUCTS
        </S.Title>
      </S.TitleWrapper>

      <Row gutter={[24, 16]} >
        <Col
          xs={{ span: 24 }} 
          sm={{ span: 8 }} 
          md={{ span: 8 }} 
          lg={{ span: 8 }}
        >
          <S.ProductItem
          
          >
            <img src={img1} alt="" />
            <S.ItemContent>
              <h2>Eaux de Parfum</h2>
            </S.ItemContent>
          </S.ProductItem>
        </Col>
        <Col
          xs={{ span: 24 }} 
          sm={{ span: 8 }} 
          md={{ span: 8 }} 
          lg={{ span: 8 }}
        >
          <S.ProductItem>
            <img src={img2} alt="" />
            <S.ItemContent>
              <h2>Eaux de Toilette</h2>
            </S.ItemContent>
          </S.ProductItem>
        </Col>
        <Col
          xs={{ span: 24 }} 
          sm={{ span: 8 }} 
          md={{ span: 8 }} 
          lg={{ span: 8 }}
        >
          <S.ProductItem>
            <img src={img3} alt="" />
            <S.ItemContent>
              <h2>Scented Candles</h2>
            </S.ItemContent>
          </S.ProductItem>
        </Col>
      </Row>
    </S.Container>
  )
}

export default ProductHome
