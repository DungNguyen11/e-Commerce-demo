import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Row,
  Col,
  Button,
  Input,
  Form,
  Select,
} from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

import {
  setOrderInfoAction,
  setInfoFormAction,
  getInfoFormListAction,
  getInfoFormItemAction,
  getCityListAction,
  getDistrictListAction,
  getWardListAction,
} from "../../../../../redux/actions";

import * as S from "./styles";

const Delivery = ({ setCheckoutStep }) => {
  const [districtOptions, setDistrictOptions] = useState([]);
  const [wardOptions, setWardOptions] = useState([]);

  const { userInfo } = useSelector((state) => state.authReducer);
  const { selectedCarts } = useSelector((state) => state.cartReducer);
  const { discountInfo } = useSelector((state) => state.discountReducer);
  const { infoFormList, infoFormItem } = useSelector(
    (state) => state.infoFormReducer
  );
  const { cityList, districtList, wardList } = useSelector(
    (state) => state.commonReducer
  );

  const [deliveryForm] = Form.useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(
        getInfoFormListAction({
          userId: userInfo.data.id,
        })
      );
    }
    dispatch(getCityListAction());
    dispatch(getDistrictListAction());
    dispatch(getWardListAction());
  }, []);

  useEffect(() => {
    deliveryForm.resetFields();
  }, [infoFormItem.data, userInfo.data]);

  const handleSelectInfoForm = (id) => {
    dispatch(
      getInfoFormItemAction({
        userId: userInfo.data.id,
        id,
      })
    );
  };

  // const handleDeleteInfoForm = (id) => {

  // }

  const initialValues = infoFormItem.data?.id
    ? {
        fullName: infoFormItem.data?.info?.fullName,
        email: infoFormItem.data?.info?.email,
        phoneNumber: infoFormItem.data?.info?.phoneNumber,
        address: infoFormItem.data?.info?.address,
      }
    : {
        fullName: userInfo.data?.infoForm.info.fullName,
        email: userInfo.data?.infoForm.info.email,
        phoneNumber: userInfo.data?.infoForm.info.phoneNumber,
        address: userInfo.data?.infoForm.info.address,
      };

  const renderInfoFormList = () => {
    const userInfoFormId = userInfo.data.infoFormId;
    return infoFormList.data?.map((infoFormItem, infoFormIndex) => {
      const isDefault = userInfoFormId === infoFormItem.id;
      return (
        <S.InfoFormItem
          key={infoFormIndex}
          onClick={() => handleSelectInfoForm(infoFormItem.id)}
        >
          <S.InfoHead>
            <S.InfoName>
              <h4>{infoFormItem.info?.fullName}</h4>
              {isDefault && (
                <S.Default>
                  <CheckCircleFilled />
                  <span>Default Address</span>
                </S.Default>
              )}
            </S.InfoName>
            {/* <S.Button onClick={() => handleDeleteInfoForm(infoFormItem.id)}>
              Edit
            </S.Button> */}
          </S.InfoHead>
          <S.InfoItem>
            <span>Address:</span>
            <h4>{infoFormItem.info?.address}</h4>
          </S.InfoItem>
          <S.InfoItem>
            <span>Phone Number:</span>
            <h4>{infoFormItem.info?.phoneNumber}</h4>
          </S.InfoItem>
          <S.InfoItem>
            <span>Email:</span>
            <h4>{infoFormItem.info?.email}</h4>
          </S.InfoItem>
        </S.InfoFormItem>
      );
    });
  };

  const renderSelectedCarts = () => {
    return selectedCarts.map((selectedCart) => {
      const unitPrice = selectedCart.productOption
        ? selectedCart.productOption?.price + selectedCart.product?.price
        : selectedCart.product?.price;

      const cartItemPrice = unitPrice * selectedCart.quantity;
      return (
        <S.CartList key={selectedCart.id}>
          <S.Img
            src={selectedCart.product?.image}
            alt={selectedCart.product?.name}
          />
          <S.ProductInfo>
            <S.ProductHead>
              <S.ProductName>{selectedCart.product?.name}</S.ProductName>
              <S.ProductPrice>{`$${cartItemPrice}`}</S.ProductPrice>
            </S.ProductHead>
            <S.ProductSize>
              {selectedCart.productOption &&
                `Size: ${selectedCart.productOption?.name}`}
            </S.ProductSize>
            <S.Quantity>Quantity: {selectedCart.quantity} </S.Quantity>
          </S.ProductInfo>
        </S.CartList>
      );
    });
  };

  const renderCityOption = () => {
    return cityList.data.map((city) => {
      return (
        <Select.Option key={city.id} value={city.code}>
          {city.name}
        </Select.Option>
      );
    });
  };

  const renderDistrictOption = () => {
    return districtOptions.map((district) => {
      return (
        <Select.Option key={district.id} value={district.code}>
          {district.name}
        </Select.Option>
      );
    });
  };

  const renderWardOption = () => {
    return wardOptions.map((ward) => {
      return (
        <Select.Option key={ward.id} value={ward.code}>
          {ward.name}
        </Select.Option>
      );
    });
  };

  const totalPrice = selectedCarts.reduce((total, item) => {
    const unitPrice = item.productOption
      ? item.productOption?.price + item.product?.price
      : item.product?.price;
    return total + unitPrice * item.quantity;
  }, 0);

  const handleConfirmDelivery = (values) => {
    // dispatch(setInfoFormAction({
    //   userId: userInfo.data.id,
    //   info: {...values},
    // }))
    const city = cityList.data.find((city) => city.code === values.city);
    const district = districtOptions.find(
      (district) => district.code === values.district
    );
    const ward = wardOptions.find((ward) => ward.code === values.ward);
    const newValues = {
      ...values,
      city: city.name,
      district: district.name,
      ward: ward.name,
    }
    dispatch(setOrderInfoAction(newValues));
    setCheckoutStep(2);
  };

  return (
    <S.PageContent>
      <Row gutter={[40, 16]}>
        <Col
          // pull={1}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 14 }}
        >
          <S.InfoFormWrapper>{renderInfoFormList()}</S.InfoFormWrapper>
          <Form
            form={deliveryForm}
            name="deliveryForm"
            layout="vertical"
            initialValues={initialValues}
            onFinish={(values) => handleConfirmDelivery(values)}
          >
            <Form.Item
              label="Name"
              name="fullName"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Input />
            </Form.Item>

            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col 
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 8 }}
                lg={{ span: 8 }}
              >
                <Form.Item
                  label="City"
                  name="city"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Select
                    onChange={(value) => {
                      const newDistrictList = districtList.data.filter(
                        (district) => district.parentcode === value
                      );
                      setDistrictOptions(newDistrictList);
                    }}
                  >
                    {renderCityOption()}
                  </Select>
                </Form.Item>
              </Col>
              <Col 
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 8 }}
                lg={{ span: 8 }}
              >
                <Form.Item
                  label="District"
                  name="district"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Select
                    onChange={(value) => {
                      const newWardList = wardList.data.filter(
                        (ward) => ward.parentcode === value
                      );
                      setWardOptions(newWardList);
                    }}
                  >
                    {renderDistrictOption()}
                  </Select>
                </Form.Item>
              </Col>
              <Col 
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 8 }}
                lg={{ span: 8 }}
              >
                <Form.Item
                  label="Ward"
                  name="ward"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Select>{renderWardOption()}</Select>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Note" name="note">
              <Input.TextArea autoSize={{ minRows: 2, maxRows: 4 }} />
            </Form.Item>
          </Form>
        </Col>
        <Col
          // offset={15}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 10 }}
        >
          <S.OrderInfo>
            <S.Bag>
              <S.BagTitle>
                <h3>MY BAG {`(${selectedCarts.length})`}</h3>
                <span onClick={() => setCheckoutStep(0)}>Edit</span>
              </S.BagTitle>
              {renderSelectedCarts()}
            </S.Bag>
            <S.ProductOrder>
              <h3>ORDER SUMMARY</h3>
              <S.SummaryItem>
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(1)}</span>
              </S.SummaryItem>
              <S.SummaryItem>
                <span>Discount:</span>
                <span>
                  {discountInfo.data.code
                    ? `- $${(
                        (totalPrice * discountInfo.data.discountValue) /
                        100
                      ).toFixed(1)}`
                    : `$0`}
                </span>
              </S.SummaryItem>
              <S.SummaryItem>
                <span>Shipping:</span>
                <span>Free</span>
              </S.SummaryItem>
              <S.Total>
                <span>Order total:</span>
                <span>
                  {discountInfo.data.code
                    ? `$${(
                        totalPrice -
                          (totalPrice * discountInfo.data.discountValue) /
                            100 || 0
                      ).toFixed(1)}`
                    : `$${totalPrice}`}
                </span>
              </S.Total>
              <S.CheckOutBtn>
                <Button
                  type="primary"
                  ghost
                  size="large"
                  style={{ marginBottom: "12px", width: "100%" }}
                  onClick={() => setCheckoutStep(0)}
                >
                  Return To Bag
                </Button>
                <Button
                  type="primary"
                  block
                  size="large"
                  onClick={() => deliveryForm.submit()}
                >
                  Confirm and Continue
                </Button>
              </S.CheckOutBtn>
            </S.ProductOrder>
          </S.OrderInfo>
        </Col>
      </Row>
    </S.PageContent>
  );
};

export default Delivery;
