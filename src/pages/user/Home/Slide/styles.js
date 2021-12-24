import styled from "styled-components";

const img1 = "https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/HP_Holidays21/REED-DIFFUSEUR-CO_1280X680_02.jpg.webp?frz-v=206"

export const SlideContainer = styled.div`
  width: 100%;
  /* height: 550px; */

  img {
    width: 100%; 
    height: 550px;
    object-fit: cover;
  }
`
export const IntroContainer = styled.div`
  margin-top: 40px;
`
export const IntroWrapper = styled.div`
  background-image: url(${img1});
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  /* padding: 190px 0px; */
  position: relative;
}
`