import React from "react";

import TopWrapper from "../../../components/TopWrapper";
import { BREADCRUMB } from "./constants";

import { Row, Col } from "antd";

import * as S from "./styles";

const imgCol1 =
  "https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/CHAP1/I-A-1-nom_boutique.jpg.webp?frz-v=206";
const imgCol3 =
  "https://www.diptyqueparis.com/fstrz/r/s/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/CHAP1/I-A-1-nom_logo.gif?frz-v=206";
const img1Row2 =
  "https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/CHAP1/I-A-2-logo_croquis1.jpg.webp?frz-v=206";
const img2Row2 =
  "https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/CHAP1/I-A-2-logo_croquis2.jpg.webp?frz-v=206";
const img1Row3 =
  "https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/CHAP1/I-A-2-logo_diptyque.jpg.webp?frz-v=206";
const img2Row3 =
  "https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/CHAP1/bloc2_2.png.webp?frz-v=206";

const AboutUs = () => {
  return (
    <div>
      <TopWrapper breadcrumb={BREADCRUMB} />
      <S.PageContainer>
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24, offset: 2 }}
            lg={{ span: 8, offset: 0 }}
          >
            <S.TextColLeft>
              <S.TextColLeftContent>
                A door with two identical windows on either side, that’s a
                boutique. For our three founders who were experts on Art
                History, it’s also a diptych, which in French is spelled
                ‘diptyque’.
              </S.TextColLeftContent>
            </S.TextColLeft>
            <S.ImgColLeft>
              <img src={imgCol1} alt="img1" />
            </S.ImgColLeft>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <S.TextColMiddle>
              <S.TextColMiddleContainer>
                <S.TextColMiddleTitle>
                  <S.TextSpan1>ARTIST'S</S.TextSpan1>
                  <S.TextSpan2>name</S.TextSpan2>
                  <S.TextSpan3>diptique</S.TextSpan3>
                </S.TextColMiddleTitle>
                <S.TextColMiddleBody>
                  <p>
                    The very first shop, located at 34 Boulevard Saint-Germain
                    in Paris, opens onto the street like a two-part Italian
                    Renaissance or Flemish master’s painting. They had found the
                    ideal stage for their chic little bazaar of fascinating
                    finds as well as the perfect name for it, diptyque.
                  </p>
                </S.TextColMiddleBody>
              </S.TextColMiddleContainer>
            </S.TextColMiddle>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <S.ColRight>
              <img src={imgCol3} alt="img3" />
            </S.ColRight>
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <S.ColLeftRow2>
              <S.TitleColLeftRow2>
                <S.Span1>THE SPIRIT</S.Span1>
                <S.Span2>and</S.Span2>
                <S.Span3>the lettering</S.Span3>
              </S.TitleColLeftRow2>
              <S.BodyColLeftRow2>
                A name that’s written like the structure of an ancient temple.
                As you get closer, the disorderly lettering is a slight twist on
                the traditional, adding a whimsical touch. At first glance, it’s
                clearly diptyque. The logo is the work of Desmond Knox-Leet.
              </S.BodyColLeftRow2>
            </S.ColLeftRow2>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <S.ColRightRow2>
              <img src={img1Row2} alt="img1Row2" />
            </S.ColRightRow2>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <S.ColRightRow2>
              <img src={img2Row2} alt="img2Row2" />
            </S.ColRightRow2>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 7 }}
          >
            <S.ColLeftRow3>
              <img src={img1Row3} alt="img1Row3" />
            </S.ColLeftRow3>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 9 }}
          >
            <S.ColMiddleRow3>
              <p>
                His passion for calligraphy shows in his India Ink strokes.
                DIPTYQUE. He says it with straight-lined simplicity, but as if
                he is stumbling, with disorderly lettering. Nothing is more
                charming than imperfection, similar to an accidental hiccup.
                There’s no need to decipher the word, the minute you arrive, the
                message is clear, in black and white.
              </p>
            </S.ColMiddleRow3>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <S.ColRightRow3>
              <img src={img2Row3} alt="img2Row3" />
            </S.ColRightRow3>
          </Col>
        </Row>
        <S.BottomContainer>
          <S.BottomTitle>
            <S.BottomTitleText>Little Stories</S.BottomTitleText>
          </S.BottomTitle>
          <S.BottomContent>
            <S.BottomContentBody>
              <S.ContentBodySub>OLFACTORY AND MUSICAL NOTES</S.ContentBodySub>
              <S.ContentBodyText>
                At 34 Boulevard Saint-Germain, the music sets the tone. One day,
                Mozart was playing in the shop and a music connoisseur asked,
                “Who’s the director?” A young sales clerk replied, “Yves
                Coueslant, one of the diptyque founders, ma’am”. The surprised
                customers then said, “Coueslant? Don’t know him.” So, the store
                manager clarified, “The conductor is Daniel Barenboim.”
                Reassured, the woman went about blissfully collecting her
                purchases in the store of wonders.
              </S.ContentBodyText>
            </S.BottomContentBody>
            <S.BottomContentBody>
              <S.ContentBodySub>DIPTYQUE, YOU KNOW!</S.ContentBodySub>
              <S.ContentBodyText>
                A case of almond scented candles. Although the customer is
                American, she is perfectly at home in the boutique at 34
                Boulevard Saint-Germain. She knows exactly what she wants.
                Everything was packaged up and ready to go in no time . "Would
                you like to fill out the duty-free form?" asked the sales
                person. "No thanks, the limo’s double parked and my private jet
                is waiting at Le Bourget". "Ah, where are you heading?” "Home,
                to Texas, where my whole ranch runs on diptyque fragrances, you
                know!"
              </S.ContentBodyText>
            </S.BottomContentBody>    
          </S.BottomContent>
        </S.BottomContainer>
      </S.PageContainer>
    </div>
  );
};

export default AboutUs;
