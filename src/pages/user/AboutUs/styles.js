import styled, { css }from "styled-components";

const bgImg = "https://www.diptyqueparis.com/fstrz/r/s/d3oi16fyxsm8ns.cloudfront.net/static/version0.0.0.383/frontend/Diptyque/default/default/images/texture-bg-yellow.jpg?frz-v=206"
const bottomImg = "https://www.diptyqueparis.com/fstrz/r/s/d3oi16fyxsm8ns.cloudfront.net/static/version0.0.0.383/frontend/Diptyque/default/default/images/texture-bg-shadow.jpg?frz-v=206"
export const PageContainer = styled.div`
  width: 100%;
  margin: 12px auto;
  padding: 0 12px;
  max-width: 1280px;
`

export const TextColLeft = styled.div`
  width: 70%;
  margin-bottom: 6rem;
  margin-left: 15%;
  margin-top: 15%;
`
export const TextColLeftContent = styled.div`
  font-style: italic;
  margin-bottom: 4rem;
  text-align: left;
  font-size: 1.3rem;
`
export const ImgColLeft = styled.div`
  width: 100%;

  img {
    max-width: 100%;
    height: auto;
  }
`
export const TextColMiddle = styled.div`
  width: 100%;
  margin-top: 0;
  margin-left: 15%;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`
export const TextColMiddleContainer = styled.div`
  background-color: #fff;
  margin: 0 0.5rem;
  position: relative;
  z-index: 10;
  box-shadow: 0 7px 8px -2px rgb(0 0 0 / 87%);
`
export const TextColMiddleTitle = styled.div`
  padding-left: 30%;
  padding-top: 2rem;
  margin: auto 1.5rem;
  font-size: 2.2rem;
  line-height: 3.2rem;
  text-transform: uppercase;
  font-family: 'Calluna','Times New Roman';
`
export const TextSpan1 = styled.span`
  display: block;
  position: relative;
  font-size: 2.3rem;
  font-weight: 400;
  text-align: left;
  left: -1rem;
  line-height: 3.2rem;
  text-transform: uppercase;
`
export const TextSpan2 = styled.span`
  display: inline-block;
  color: #909090;
  font-size: 3rem;
  line-height: 3.2rem;
  text-transform: none;
  vertical-align: top;
  font-style: italic;
  position: relative;
  width: 100%;
  text-align: left;
  padding-left: 4rem;
  top: -1.5rem;
`
export const TextSpan3 = styled.span`
  display: inline-block;
  font-size: 3.5rem;
  font-style: italic;
  text-transform: none;
  position: relative;
  width: 100%;
  text-align: left;
  padding-left: 0.5rem;
  top: -2rem;
`
export const TextColMiddleBody = styled.div`
  font-style: italic;
  text-align: center;
  font-size: 1.3rem;
  padding: 0 2rem 2rem;
  background-color: #fff;
  margin: auto 2.5rem;
`
export const ColRight = styled.div`
  width: 100%;
  margin-top: 3rem;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
  }
`
export const ColLeftRow2  = styled.div`
  margin-top: 2.5rem;
`
export const TitleColLeftRow2  = styled.div`
  font-size: 1.8rem;
  line-height: 2.8rem;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
  text-align: center;
  font-family: 'Calluna','Times New Roman';
`
export const Span1  = styled.span`
  display: block;
  position: relative;
  font-size: 2.2rem;
  font-weight: 700;
  left: -5.5rem;
  text-align: center;

  @media only screen and (max-width: 1024px) {
    left: -4rem;
  }
`
export const Span2  = styled.span`
  display: inline-block;
  position: relative;
  color: #767677;
  font-size: 2.9rem;
  text-transform: none;
  vertical-align: top;
  font-style: italic;
  margin-top: -1.1rem;
  left: 2rem;
  text-align: center;
`
export const Span3  = styled.span`
  display: inline-block;
  position: relative;
  font-size: 3.4rem;
  font-style: italic;
  text-transform: none;
  padding-top: 15px;
  text-align: center;
`
export const BodyColLeftRow2  = styled.div`
  font-size: 1.3rem;
  font-style: italic;
  line-height: 2rem;
  margin: 0 auto 5rem;
  width: 75%;
`
export const ColRightRow2  = styled.div`
  margin: auto;
  width: 80%;
  img {
    height: auto;
    max-width: 100%;
  }
`
export const ColLeftRow3  = styled.div`
  display: flex;
  align-self: self-start;
  margin-top: -5rem;
  margin-bottom: 0;
  padding: 3rem;

  img {
    margin: auto;
    max-width: 60%;
    height: auto;
  }
`
export const ColMiddleRow3  = styled.div`
  font-size: 1.3rem;
  font-style: italic;
  line-height: 2rem;
  margin: 0 auto;
  text-align: start;
`
export const ColRightRow3  = styled.div`
  margin-top: -5rem;
  padding: 0 2rem;

  img {
    height: auto;
    max-width: 100%;
    border: 0;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`

export const BottomContainer  = styled.div`
  background: url(${bgImg});
  padding: 4.4rem 0 0;
  margin-top: 40px;
  position: relative;

  &:after {
  background: url(${bottomImg}) right bottom no-repeat #fff;
    content: " ";
    display: block;
    height: 3rem;
    width: 100%;
  }
`
export const BottomTitle  = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`
export const BottomTitleText  = styled.span`
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 2.4rem;
  font-style: italic;
  line-height: 1.2;
  font-family: "Philosopher";

  &:after {
    content: " ";
    display: block;
    border-bottom: 1px solid #000;
    margin: 1.5rem auto 0;
    width: 10rem;
  }
`
export const BottomContent  = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-style: italic;
  padding-bottom: 5rem;
  /* margin-right: -6%;
  margin-left: -6%; */

  @media only screen and (max-width: 376px) {
    flex-direction: column;
  }
`
export const BottomContentBody  = styled.div`
  flex: 44%;
  margin: 0 5%;
`
export const ContentBodySub = styled.div`
  font-style: normal;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`
export const ContentBodyText  = styled.div`
  font-style: italic;
  line-height: 2rem;
  margin: 0 10% 0 0;
  text-align: left;
  word-spacing: normal;
  margin-bottom: 2rem;
  /* margin: 0 6%; */
`