import React from "react";
import * as S from "./styles";

const img1 =
  "https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/CHAP1/I-B-2_frise3.jpg.webp?frz-v=206";
const img2 =
  "https://www.diptyqueparis.com/fstrz/r/s/c/d1wwvmedxjfrrp.cloudfront.net/wysiwyg/CHAP1/I-B-2_frise1.jpg.webp?frz-v=206";

const Intro = () => {
  return (
    <div>
      <S.IntroContainer>
        <S.IntroWrapper>
          <S.Img src={img1} alt="img1" />
          <S.IntroContent>
            <S.ContentTitle>The Spirit Of Diptyque Perfumes…</S.ContentTitle>
            <S.ContentBody>
              <p>Behold the bottle of a diptyque fragrance.</p>
              <p>
                Through the liquid, observe the back of the label. An image
                appears. Open up, breathe. You have arrived in an "olfactory
                landscape", the essence of diptyque perfumes.
              </p>
              <p>
                Each illustration is an integral part of the perfume creation
                process, and reveals its intimate story. Flowers, fruits,
                landscapes stretch out in a elaborate panorama drawn in Indian
                ink.
              </p>
            </S.ContentBody>
          </S.IntroContent>
        </S.IntroWrapper>
        <S.IntroWrapper>
          <S.IntroContent>
            <S.ContentTitle>The Art Of Perfume...</S.ContentTitle>
            <S.ContentBody>
              <p>
                For diptyque, creating fragrances is an art and art is a
                journey.
              </p>
              <p>
                An imaginary journey of the mind and the senses across olfactory
                landscapes, far from the paths that others take, in search of
                rare raw materials and unexpected accords.
              </p>
              <p>
                A journey between the past and the future, between tradition and
                the avant-garde, toward another place where history, new ideas
                and disruption combine.
              </p>
            </S.ContentBody>
          </S.IntroContent>
          <S.Img src={img2} alt="img2" />
        </S.IntroWrapper>
      </S.IntroContainer>
    </div>
  );
};

export default Intro;
