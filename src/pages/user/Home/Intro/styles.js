import styled from "styled-components";

export const IntroContainer = styled.div`
  max-width: 1280px;
  margin: 40px auto 0;
  padding: 12px;

  
`
// export const IntroWrapper = styled.div`
//   background-image: url(${img1});
//   background-attachment: fixed;
//   background-position: center center;
//   background-size: cover;
//   padding: 220px 0px;
//   position: relative;
// }
// `

export const IntroWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  margin-left: -30px;
  margin-right: -30px;

  @media only screen and (max-width: 769px) {
    flex-direction: column;
  }
`
export const Img = styled.img`
  max-width: 100%;
  height: 100%;
  flex: 40%;
  margin: auto 30px;

  @media only screen and (max-width: 769px) {
    order: 1;
  }
`
export const IntroContent = styled.div`
  flex: 40%;
  margin: auto 30px;
  padding: 20px;
  text-align:center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ContentTitle = styled.div`
  color: #000;
  font-family: 'Philosopher', sans-serif; 
  letter-spacing: 2px;
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 12px;
`

export const ContentBody = styled.div`
  
  font-size: 1.1rem;
  color: #a8a8a8;
  padding: 24px;

  p {
    margin-bottom: 8px;
    text-align: justify;
  }
`