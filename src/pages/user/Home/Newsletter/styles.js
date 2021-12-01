import styled from 'styled-components';

const btnIcon = 'https://www.joloves.com/svg-icons/arrow.svg'

export const Container = styled.div`
  padding: 20px 0;
  margin: 40px auto;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* border-top: 1px solid #d9d9d9; */
  /* border-bottom: 1px solid #d9d9d9; */

  @media only screen and (min-width: 1200px) {
     max-width: 1200px;
    }
  @media only screen and (max-width: 920px) {
    display : flex;
    flex-direction: column;
    align-items: center;
   }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;

    h4 {
        color: #000;
        font-family: Gotham Medium,sans-serif;;
        letter-spacing: 2px;
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 24px;
    }

    .newsletter-form {
        width: 400px;
        /* @media only screen and (max-width: 920px) {
          width: ;
        } */
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
`