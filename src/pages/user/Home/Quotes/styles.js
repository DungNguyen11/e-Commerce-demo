import styled from "styled-components";

export const QuotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
  padding: 12px;
  background-color: #fafafa;
  /* padding: 20px 0; */
  /* border: 1px solid #757575; */

  @media only screen and (min-width: 1200px) {
  max-width: 1200px;
}
`
export const QuotesContent = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.8rem;
  /* font-family: 'Times New Roman', Times, serif; */
  font-weight: 200;
  font-style: italic;
  letter-spacing: 1.5px;
  line-height: 4.6rem;
  margin: 16px 0;
  padding: 8px 24px;
`