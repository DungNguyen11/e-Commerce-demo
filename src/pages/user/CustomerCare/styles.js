import styled, { css }from "styled-components";
import { Row, Col} from "antd";

export const PageContainer = styled.div`
  width: 100%;
  margin: 12px auto;
  /* padding: 0 12px; */
  max-width: 1280px;
`
export const BoxWrapper = styled.div`
  border: 1px solid #A4B7C4;
  background-color: #F7F7F7;
  box-shadow: 0px 0px 0px 15px #fff inset;
  padding: 60px;
`
export const BoxHeader = styled.p`
  text-align: center;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: #000000;
`
export const BoxRow = styled(Row)`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 730px;
  padding-top: 50px;
  padding-bottom: 30px;
  margin: 0px auto;
`
export const BoxCol = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* height: 170px; */
  cursor: pointer;

  & span {
    font-size: 0.8rem;
    text-transform: none;
    padding: 6px;
  }

  &:hover {
    opacity: 0.7;
  }
`
export const ColText = styled.div`
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  text-decoration-line: underline;
  text-transform: uppercase;
  color: #000;
  padding-top: 30px;
  padding-bottom: 8px;
`