import styled, { css } from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const DetailItem = styled.div`
  display: inline-flex;
  padding: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  /* span {
    color: #919191;
  } */

  h4 {
    margin-left: 8px;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const FormContainer = styled.div`
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
  display: none;

  ${({ isShowForm }) => 
    isShowForm && css`
      display: block;
    `}
`;
