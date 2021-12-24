import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Input, Button, Row, Col, Select } from "antd";

import { PlusCircleFilled, CheckCircleFilled } from "@ant-design/icons";

import {
  setInfoFormAction,
  getInfoFormListAction,
  getInfoFormItemAction,
  deleteInfoFormAction,
  updateInfoFormAction,
  changeDefaultInfoFormAction,
  getCityListAction,
  getDistrictListAction,
  getWardListAction,
} from "../../../../../redux/actions";

import * as S from "./styles";

const AddressBook = () => {
  const [isCreateForm, setIsCreateForm] = useState(false);
  const [isEditForm, setIsEditForm] = useState(false);

  const [districtOptions, setDistrictOptions] = useState([]);
  const [wardOptions, setWardOptions] = useState([]);

  const { userInfo } = useSelector((state) => state.authReducer);
  const { infoFormList, infoFormItem } = useSelector(
    (state) => state.infoFormReducer
  );
  const { cityList, districtList, wardList } = useSelector(
    (state) => state.commonReducer
  );

  const [addressCreateForm] = Form.useForm();
  const [addressEditForm] = Form.useForm();

  const dispatch = useDispatch();

  const initialValues = infoFormItem.data?.id
    ? {
        fullName: infoFormItem.data?.info?.fullName,
        email: infoFormItem.data?.info?.email,
        phoneNumber: infoFormItem.data?.info?.phoneNumber,
        address: infoFormItem.data?.info?.address,
      }
    : {
        fullName: userInfo.data?.name,
        email: userInfo.data?.email,
        phoneNumber: "",
        address: "",
      };

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(
        getInfoFormListAction({
          userId: userInfo.data.id,
        })
      );
    }
  }, []);

  useEffect(() => {
    dispatch(getCityListAction());
    dispatch(getDistrictListAction());
    dispatch(getWardListAction());
  }, []);

  useEffect(() => {
    addressEditForm.resetFields();
  }, [infoFormItem.data]);

  const handleCreateInfoForm = (values) => {
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
    };
    dispatch(
      setInfoFormAction({
        data: {
          userId: userInfo.data.id,
          info: newValues,
        },
        callback: {
          clearForm: () => addressCreateForm.resetFields(),
        },
      })
    );
    setIsCreateForm(!isCreateForm);
  };

  const handleSelectInfoForm = (id) => {
    dispatch(
      getInfoFormItemAction({
        userId: userInfo.data.id,
        id,
      })
    );
  };

  const handleEditInfoForm = (id, values) => {
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
    };
    dispatch(
      updateInfoFormAction({
        id,
        data: {
          info: newValues,
        },
      })
    );
    setIsEditForm(!isEditForm);
  };

  const handleDeleteForm = (id) => {
    dispatch(deleteInfoFormAction({ id }));
  };

  const handleSetDefault = (infoFormId) => {
    dispatch(changeDefaultInfoFormAction({
      id: userInfo.data.id,
      data: {
        infoFormId
      }
    }))
    console.log(infoFormId);
  };

  const renderInfoFormList = () => {
    const userInfoFormId = userInfo.data.infoId;
    return infoFormList.data?.map((infoFormItem, infoFormIndex) => {
      const isDefault = userInfoFormId === infoFormItem.id;
      return (
        <Col
          key={infoFormIndex}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
        >
          <S.InfoFormItem>
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
              <S.BtnWrapper>
                {!isDefault && (
                  <S.Button               
                  style={{ color: "rgba(0, 0, 0, 0.85)", fontWeight: "400"}}
                  onClick={() => handleSetDefault(infoFormItem.id)}
                >
                  Set as default address
                </S.Button>
                )}                
                <S.Button
                  style={{
                    margin: "0 8px",
                    textDecoration: "underline",
                  }}
                  onClick={() => {
                    handleSelectInfoForm(infoFormItem.id);
                    setIsEditForm(!isEditForm);
                    setIsCreateForm(false);
                  }}
                >
                  Edit
                </S.Button>
                <S.Button
                  style={{
                    color: "#ff7875",
                  }}
                  onClick={() => handleDeleteForm(infoFormItem.id)}
                >
                  Delete
                </S.Button>
              </S.BtnWrapper>
            </S.InfoHead>
            <S.InfoItem>
              <span>Phone Number:</span>
              <h4>{infoFormItem.info?.phoneNumber}</h4>
            </S.InfoItem>
            <S.InfoItem>
              <span>Email:</span>
              <h4>{infoFormItem.info?.email}</h4>
            </S.InfoItem>
            <S.InfoItem>
              <span>Address:</span>
              <h4>{`${infoFormItem.info?.address}, ${infoFormItem.info?.ward}, ${infoFormItem.info?.district}, ${infoFormItem.info?.city}`}</h4>
            </S.InfoItem>
          </S.InfoFormItem>
        </Col>
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

  return (
    <div>
      <h3 style={{ marginBottom: "12px" }}>Address Book</h3>
      <Row style={{ margin: "16px 0" }}>
        <Button
          type="dashed"
          block
          icon={<PlusCircleFilled />}
          onClick={() => {
            setIsCreateForm(!isCreateForm);
            setIsEditForm(false);
          }}
        >
          Create New Address
        </Button>
      </Row>
      <Row gutter={[24, 24]}>{renderInfoFormList()}</Row>

      <Row>
        {isCreateForm && (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 16, offset: 4 }}
          >
            <S.FormContainer>
              <Form
                form={addressCreateForm}
                name="addressCreateForm"
                layout="vertical"
                initialValues={""}
                onFinish={(values) => handleCreateInfoForm(values)}
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
                <Row justify="center" gutter={[12]}>
                  <Button
                    style={{ width: "160px" }}
                    htmlType="submit"
                    type="primary"
                    size="large"
                  >
                    Save
                  </Button>
                  <Button
                    style={{ width: "160px", marginLeft: "10px" }}
                    size="large"
                    onClick={() => setIsCreateForm(false)}
                  >
                    Cancel
                  </Button>
                </Row>
              </Form>
            </S.FormContainer>
          </Col>
        )}

        {isEditForm && (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 16, offset: 4 }}
          >
            <S.FormContainer>
              <Form
                form={addressEditForm}
                name="addressEditForm"
                layout="vertical"
                initialValues={initialValues}
                onFinish={(values) =>
                  handleEditInfoForm(infoFormItem.data?.id, values)
                }
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
                <Row justify="center" gutter={[12]}>
                  <Button
                    style={{ width: "160px" }}
                    htmlType="submit"
                    type="primary"
                    size="large"
                  >
                    Update
                  </Button>
                  <Button
                    style={{ width: "160px", marginLeft: "10px" }}
                    htmlType="submit"
                    size="large"
                    onClick={() => setIsEditForm(false)}
                  >
                    Cancel
                  </Button>
                </Row>
              </Form>
            </S.FormContainer>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default AddressBook;
