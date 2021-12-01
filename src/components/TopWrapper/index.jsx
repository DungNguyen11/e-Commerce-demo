import React from 'react';
import { Breadcrumb } from "antd";
import { useHistory } from "react-router";

import * as S from "./styles";

const TopWrapper = ({ breadcrumb = [] }) => {

  const history = useHistory();

  function redirectPage(e, path) {
    e.preventDefault();
    history.push(path);
  }

  // const obj = breadcrumbIndex !== breadcrumb.length -1 ? {
  //   href: '#'
  // } : {} - giai thich dong code 25 -27

  function renderBreadcrumb() {
    return breadcrumb.map((breadcrumbItem, breadcrumbIndex) => {
      return (
        <Breadcrumb.Item 
          key={`breadcrumb-${breadcrumbIndex}`}
          {...(breadcrumbIndex !== breadcrumb.length - 1 && {
            href: "#"
          })}
          // {...obj} - giai thich dong code 25 -27
          onClick={(e) => redirectPage(e, breadcrumbItem.path)}
        >
          {breadcrumbItem.icon && breadcrumbItem.icon }
          <span>{breadcrumbItem.title}</span>
        </Breadcrumb.Item>
      )
    })
  }

  return (
    <S.TopContainer>
      <Breadcrumb>
      {renderBreadcrumb()}
      </Breadcrumb>
    </S.TopContainer>
  )
}

export default TopWrapper
