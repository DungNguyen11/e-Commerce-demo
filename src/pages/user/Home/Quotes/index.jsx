import React from 'react'
import * as S from './styles'

const Quotes = () => {
  const img1 = 'https://img.icons8.com/small/32/000000/quote-left.png'
  const img2 = 'https://img.icons8.com/small/32/000000/quote-right.png'
  return (
    <S.QuotesWrapper>
    <S.QuotesContainer>
      <img src={img1} alt="" />
      <S.QuotesContent>A door with two identical windows on either side, that’s a boutique. For our three founders who were experts on Art History , it’s also a diptych, which in French is spelled ‘diptyque’.</S.QuotesContent>
      <img src={img2} alt="" />      
    </S.QuotesContainer>
    </S.QuotesWrapper>
  )
}

export default Quotes
