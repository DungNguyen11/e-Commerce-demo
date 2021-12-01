import React from 'react';
import Slider from "react-slick";
import * as S from './styles'

const Slide = () => {
  const img1 = 'https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/HP_Black_Friday_21/1_homepage_PC_1280x680_.jpg.webp?frz-v=201'
  const img2 = 'https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/HP_Holidays21/FRAGRANCES_1280x680-2.jpg.webp?frz-v=201'
  const img3 = 'https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/HP_Holidays21/REED_1280X680_02_1.jpg.webp?frz-v=201'
  const img4 = 'https://charleroi-duty-free.com/media/contentmanager/content/IDF_JFS7739_1920x1080_1.jpg'

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    mobileFirst: true,
  //   variableWidth: true,
  // variableHeight: true,
    arrows: false, 
    // responsive: [
    //   {
    //     breakpoint: ,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    // ]
  };

  return (
    <S.SlideContainer>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="" />       
        </div>
         <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
      </Slider>
    </S.SlideContainer>

  )
}

export default Slide
