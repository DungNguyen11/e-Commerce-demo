import styled, { css } from "styled-components";

export const FormContainer = styled.div`
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
`;

export const InfoFormWrapper = styled.div`
  margin-bottom: 16px;
`

export const InfoFormItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 4px;
  cursor: pointer;
`

export const InfoHead = styled.h4`
  display: flex;
  justify-content: space-between;
`

export const BtnWrapper = styled.h4`
  display: inline-flex;
  cursor: pointer;
`
export const Button = styled.h4`
    color: #8c8c8c;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover {
      opacity: 0.8;
    }
`
export const InfoName = styled.div`
  /* font-size: 1rem;
  text-transform: uppercase; */
  /* margin-bottom: 8px; */
  display: flex;
  align-items: center;
  
  & h4 {
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0;
  }
`
export const InfoItem = styled.div`
  display: inline-flex;
  span {
    color: #919191;
  }

  h4 {
    margin-left: 8px;
  }
`
export const Default = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  
  & span {
    margin-left: 8px;
    font-weight: 400;
  }
`
