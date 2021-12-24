import {
  HomeOutlined,
  IdcardOutlined,
  HistoryOutlined,
  HeartOutlined,
  EnvironmentOutlined,
  KeyOutlined,
} from "@ant-design/icons";

export const BREADCRUMB = [
  {
    title: "Home",
    path: "/",
    icon: <HomeOutlined />,
  },
  {
    title: "My Profile",
    path: "/profile",
  },
];

export const PROFILE_TABS = [
  {
    title: "My details",
    icon: <IdcardOutlined />,
    value: 0,
  },
  {
    title: "My orders",
    icon: <HistoryOutlined />,
    value: 1,
  },
  {
    title: "My address book",
    icon: <EnvironmentOutlined />,
    value: 2,
  },
  {
    title: "Wishlist",
    icon: <HeartOutlined />,
    value: 3,
  },
  {
    title: "Change Password",
    icon: <KeyOutlined />,
    value: 4,
  },

  // {
  //   title: "Thông tin thanh toán",
  //   icon: <CreditCardOutlined />,
  //   value: 4,
  // },
  // {
  //   title: "Đổi mật khẩu",
  //   icon: <KeyOutlined />,
  //   value: 5,
  // },
];