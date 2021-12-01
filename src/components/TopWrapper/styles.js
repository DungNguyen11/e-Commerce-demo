import styled from "styled-components";
import topWrapperImg from '../../assets/images/top_wrapper_img.png'

export const TopContainer = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
  width: 100%;
  height: 70px;
  padding: 0 30px;
  background: url(${topWrapperImg});

  & .ant-breadcrumb-link,
  & .ant-breadcrumb-separator {
    /* position: relative; */
    /* color: #000; */
    font-size: 1rem;
    z-index: 1;
  }
`