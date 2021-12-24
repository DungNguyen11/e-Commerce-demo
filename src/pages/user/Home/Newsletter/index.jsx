import React from 'react';
import * as S from './styles';
import { Input, Row, Col} from 'antd';

const NewsLetter = () => {
  const img = 'https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/Noel/2020/aog/boutique.jpg.webp?frz-v=201'
  return (
    <S.Container>
      <Row gutter={[48, 0]}>
        <Col 
          xs={{ span: 24}} 
          sm={{ span: 24 }} 
          md={{ span: 24 }} 
          lg={{ span: 12 }}>
        <img src={img} alt="" />
        </Col>
        <Col 
          xs={{ span: 24}} 
          sm={{ span: 24 }} 
          md={{ span: 16, offset: 4}} 
          lg={{ span: 12, offset: 0}}>
        <S.InputWrapper >
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <S.SubTitle>Discover our latest news: from exciting new product launches and limited edition collections, to inspired gift ideas.</S.SubTitle>
          <div className='newsletter-form' >
            <Input 
              placeholder='Enter Your Email Address'
              addonAfter= {
                  <button type='submit' className='newsletter-btn-icon'></button>
              } 
            />
          </div>   
        </S.InputWrapper>
        </Col>
      </Row>
    </S.Container>
  )
}

export default NewsLetter
