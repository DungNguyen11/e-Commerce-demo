import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Space, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

import TopWrapper from "../../../components/TopWrapper";
import OrderHistory from "./components/OrderHistory"
import WishList from "./components/Wishlist"
import ChangePassword from "./components/ChangePassword"
import Detail from "./components/Detail"
import AddressBook from "./components/AddressBook"

import { BREADCRUMB, PROFILE_TABS } from "./constants";

import * as S from "./styles";

const ProfilePage = () => {

  const [activeTab, setActiveTab] = useState(0);

  const { userInfo } = useSelector((state) => state.authReducer);

  const renderProfileTab = () => {
    return PROFILE_TABS.map((tabItem, tabIndex) => (
      <S.TabItem 
        key={`tab-${tabIndex}`}
        onClick={() => setActiveTab(tabItem.value)}
        active={activeTab === tabItem.value}
      >
        <Space>
          {tabItem.icon}
          {tabItem.title}
        </Space>
      </S.TabItem>
    ))
  }

  return (
    <div>
      <TopWrapper breadcrumb={BREADCRUMB}/>    
      <S.ProfileContainer>
        <S.ProfileWrapper>
        <Row gutter={[16, 16]} >
            <Col 
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 6 }}
            >          
            <S.LeftContainer>
              <S.AvatarContainer>
                <Avatar size={60} icon={<UserOutlined />} />
                <h2 style={{ color: "#333" }}>{userInfo.data.name}</h2>
              </S.AvatarContainer>        
              {renderProfileTab()}
            </S.LeftContainer>
            </Col>
            <Col 
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 18 }}
            >
            <S.RightContainer>
              {activeTab === 0 && <Detail/>}
              {activeTab === 1 && <OrderHistory/>}
              {activeTab === 2 && <AddressBook/>}
              {activeTab === 3 && <WishList/>}
              {activeTab === 4 && <ChangePassword/>}
            </S.RightContainer>
            </Col>
            </Row>
        </S.ProfileWrapper>
      </S.ProfileContainer>     
    </div>
  )
}

export default ProfilePage
