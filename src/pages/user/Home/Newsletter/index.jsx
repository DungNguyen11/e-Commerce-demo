import React from 'react';
import * as S from './styles';
import { Input} from 'antd';

const NewsLetter = () => {
  const img = 'https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/Noel/2020/aog/boutique.jpg.webp?frz-v=201'
  return (
    <S.Container>
      <img src={img} alt="" />
      <S.InputWrapper>
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        
        <div className='newsletter-form' >
          <Input 
            placeholder='Enter Your Email Address'
            addonAfter= {
                <button type='submit' className='newsletter-btn-icon'></button>
            } 
          />
        </div>   
      </S.InputWrapper>
    </S.Container>
  )
}

export default NewsLetter
