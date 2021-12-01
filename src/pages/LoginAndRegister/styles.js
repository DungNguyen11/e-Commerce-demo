import styled from 'styled-components';
import backgroundImg from '../../assets/images/backgroundLogin.png'

// const imgBackground = 'https://www.diptyqueparis.com/fstrz/r/s/d3oi16fyxsm8ns.cloudfront.net/static/version0.0.0.368/frontend/Diptyque/default/default/Diptyque_StoreLocator/images/store-locator-home.jpg?frz-v=201'

export const LoginContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: gray;
    background: url(${backgroundImg}) fixed;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0, 0.08);
    }
`;

export const LoginForm = styled.div`
  margin: 16px;
  padding: 16px;
  width: 500px;
  /* min-height: calc(100vh); */
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 10px;
  z-index: 1;
`;

