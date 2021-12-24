import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ROUTER } from "../../constants/router";

import * as S from "./styles";
import {
  Menu,
  Dropdown,
  Button,
  Space,
  Drawer,
  Badge,
  notification,
} from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import { logoutAction } from "../../redux/actions";

const logo =
  "https://logos-download.com/wp-content/uploads/2016/05/Diptyque_logo_logotype.png";

const Header = () => {
  const { cartList } = useSelector((state) => state.cartReducer);
  const { userInfo } = useSelector((state) => state.authReducer);

  const history = useHistory();
  const dispatch = useDispatch();

  const NAVBAR_ITEMS = [
    {
      title: "Home",
      path: ROUTER.USER.HOME,
    },
    {
      title: "fragrances",
      path: ROUTER.USER.ALL_PRODUCT_LIST,
    },
    {
      title: "about us",
      path: ROUTER.ABOUT_US,
    },
    {
      title: "customer care",
      path: ROUTER.CUSTOMER_CARE,
    },
  ];

  const renderNavItems = () => {
    return NAVBAR_ITEMS.map((item, index) => {
      return (
        <S.HeaderNavItem key={index} onClick={() => history.push(item.path)}>
          {item.title}
        </S.HeaderNavItem>
      );
    });
  };

  const renderNavItemsMobile = () => {
    return NAVBAR_ITEMS.map((item, index) => {
      return (
        <S.HeaderNavItemMobile
          key={index}
          onClick={() => history.push(item.path)}
        >
          {item.title}
        </S.HeaderNavItemMobile>
      );
    });
  };

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    dispatch(logoutAction());
  };

  // const handleClickCart = () => {
  //   if(!userInfo) {
  //     notification.warning({
  //       message: "Please Sign In for more services!"
  //     })
  //   } else {
  //     history.push(ROUTER.USER.CART)
  //   }
  // }

  return (
    <S.HeaderWrap>
      <S.HeaderContainer>
        <div className="menu-container menu-hide-desktop">
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
          ></Button>
          <Drawer title="" placement="left" onClose={onClose} visible={visible}>
            {renderNavItemsMobile()}
          </Drawer>
        </div>
        <S.HeaderLogo onClick={() => history.push(ROUTER.USER.HOME)}>
          <img src={logo} alt="" />
        </S.HeaderLogo>
        <S.HeaderNav>{renderNavItems()}</S.HeaderNav>
        <S.HeaderIcons>
          <Space size={30}>
            {userInfo.data.id ? (
              <Dropdown
                placement="bottomRight"
                style={{ fontSize: 16 }}
                overlayStyle={{ marginTop: 10 }}
                overlay={
                  <Menu style={{ width: "120px" }}>
                    <Menu.Item
                      key="1"
                      onClick={() => history.push(ROUTER.USER.PROFILE)}
                    >
                      My Profile
                    </Menu.Item>
                    <Menu.Item key="2" onClick={() => handleLogout()}>
                      Log out
                    </Menu.Item>
                  </Menu>
                }
              >
                <UserOutlined style={{ color: "black" }} />
              </Dropdown>
            ) : (
              <UserOutlined
                style={{ color: "black" }}
                onClick={() => {
                  history.push(ROUTER.LOGIN_REGISTER);
                }}
              />
            )}
            <Badge count={cartList.data.length}>
              <ShoppingCartOutlined
                style={{ color: "black", fontSize: 27 }}
                onClick={() =>
                  history.push({
                    pathname: ROUTER.USER.CART,
                    state: {
                      checkoutStep: 0,
                    },
                  })
                }
              />
            </Badge>
          </Space>
        </S.HeaderIcons>
      </S.HeaderContainer>
    </S.HeaderWrap>
  );
};

export default Header;
