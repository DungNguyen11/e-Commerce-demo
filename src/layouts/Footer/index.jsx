import React from 'react';
import { Row, Col, Input } from "antd";

import * as S from './styles'

const FooterPage = () => {
    return (
        <S.Footer>
            <div className='footer-content' >
            <Row >
                <Col xs={{span: 24 }} sm={{span: 12, offset: 7 }} md={{span: 12, offset: 8 }} lg={{span: 6, offset: 0 }}>
                    <S.NewletterFormWrap> 
                        <h4>LET'S KEEP IN TOUCH</h4>
                        <div className='newsletter-form' >
                            <Input 
                                placeholder='Enter Your Email Address'
                                addonAfter= {
                                    <button type='submit' className='newsletter-btn-icon'></button>
                                } 
                            />
                        </div>   
                        </S.NewletterFormWrap>
                </Col>
                <Col push={2} xs={{span: 24, push: 1 }} sm={{span: 8, offset: 0}} md={{span: 8, offset: 0 }} lg={{span: 6,  offset: 0}}>
                    <S.FooterLink>
                        <li className='footer-link-item'>
                            <a href="/">LOCATIONS</a>
                        </li>
                        <li className='footer-link-item'>
                            <a href="/">EXPERIENCES</a> 
                        </li>
                        <li className='footer-link-item'>
                            <a href="/">SAMPLES</a> 
                        </li>
                        <li className='footer-link-item'>
                            <a href="/">ONLINE BENEFIT</a> 
                        </li>
                    </S.FooterLink>
                </Col>
                <Col push={1} xs={{span: 24 }} sm={{span: 8, offset: 0}} md={{span: 8, offset:0 }} lg={{span: 6, offset: 0}}>
                    <S.FooterLink>
                        <li className='footer-link-item'>
                            <a href="/">CUSTOMER SERVICE</a>
                        </li>
                        <li className='footer-link-item'>
                            <a href="/">PRIVACY POLICY</a> 
                        </li>
                        <li className='footer-link-item'>
                            <a href="/">CAREERS</a> 
                        </li>
                        <li className='footer-link-item'>
                            <a href="/">SUSTAINABILITY</a> 
                        </li>
                    </S.FooterLink>
                </Col>
                <Col xs={{span: 24 }} sm={{span: 8, offset: 0}} md={{span: 8, offset: 0 }} lg={{span: 6, offset: 0}}>
                    <S.FooterSocial>
                        <S.FooterSocialIcon>
                            <li>
                                <a href="/" className='icon-facebook'></a>
                            </li>
                            <li>
                                <a href="/" className='icon-instagram'></a>
                            </li>
                            <li>
                                <a href="/" className='icon-twitter'></a>
                            </li>
                        </S.FooterSocialIcon>
                        <S.FooterContact>
                            <div>+1 (833) 798-0845</div>
                            <div>Monday to Friday - 9.00 am to 6.00 pm EST</div>
                        </S.FooterContact>
                    </S.FooterSocial>
                </Col>
            </Row>
            </div>
        </S.Footer>
    )
}

export default FooterPage
