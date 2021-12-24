import styled, { css }from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  background-color: #fcfcfc;
`
export const ProfileWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 24px 12px;
  max-width: 1280px;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 250px; */
  background-color: #fff;
  /* box-shadow: 0 3px 6px 10px rgba(0, 0, 0, 0.02); */
`
export const RightContainer = styled.div`
  padding: 16px;
  margin-left: 24px;
  /* width: calc(100% - 250px); */
  background-color: #f5f5f5;
  box-shadow: 0 3px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 6px;

  @media only screen and (max-width: 768px) {
    margin-left: 0;

  }
`
export const AvatarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px;
  width: 100%;
  /* height: 100px; */

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TabItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 50px;
  cursor: pointer;
  color: #333;

  &:hover {
    background-color: #f5f5f5;
  }

  ${({ active }) => active && 
    css`
      /* background-color: #f5f5f5; */
      border-right: 2px solid #c7c7c7;
    `
  }
`;