import styled from 'styled-components';

const btnIcon = 'https://www.joloves.com/svg-icons/arrow.svg'

export const Container = styled.div`
  padding: 20px;
  margin: 40px auto;
  width: 100%;
  text-align: center;
  /* display: flex;
  justify-content: space-evenly;
  align-items: center; */
  /* border-top: 1px solid #d9d9d9; */
  /* border-bottom: 1px solid #d9d9d9; */

  img {
    max-width: 100%;
    height: auto;
  }

  @media only screen and (min-width: 1200px) {
     max-width: 1200px;
    }
  @media only screen and (max-width: 920px) {
    display : flex;
    flex-direction: column;
    align-items: center;
   }
`
export const SubTitle = styled.div`
  font-size: 1.1rem;
  color: #a8a8a8;
  /* width: 380px; */
  letter-spacing: 0.8px;
  margin-bottom: 24px;
  text-align: justify;
  /* font-style: italic; */

  @media only screen and (max-width: 768px) {
    text-align: justify;
    width: 75%;
    margin: 0 auto 28px;
    font-size: 1rem;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 0;
  height: 100%;

    h4 {
        color: #000;
        font-family: Gotham Medium,sans-serif;;
        letter-spacing: 2px;
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 24px;
    }

    .newsletter-form {
      /* @media only screen and (max-width: 768px) {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 20px; */
  }
    }

    .newsletter-btn-icon {
        display: block;
        width: 36px;
        height: 20px;
        background-color: transparent;
        background: url(${btnIcon}) no-repeat 40%;
        opacity: 0.4;
        color: inherit;
        border-width: 0;
        padding: 0;
        line-height: 1em;
    }
    
    .newsletter-btn-icon:hover {
        cursor: pointer;
    }

     @media only screen and (max-width: 768px) {
    margin-top: 16px;

    h4 {
      font-size: 1rem;   
    }
  }
`