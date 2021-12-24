import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
  Form,
  Input,
  Button,
  Row,
} from "antd";

import { changeDetailAction } from "../../../../../redux/actions";

import * as S from './styles'

const Detail = () => {
  const [isShowForm, setIsShowForm] = useState(false);

  const [changeDetailForm] = Form.useForm();

  const { userInfo } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();

  const initialValues = userInfo.data.id && ({
    newName: userInfo.data.name,
    newEmail: userInfo.data.email, 
  }
  )

  useEffect(() => {
    changeDetailForm.resetFields();
  }, [userInfo.data]);

  const handleChangeDetail = (values) => {
    dispatch(changeDetailAction({
      id: userInfo.data.id,
      data: {
        name: values.newName,
        email: values.newEmail,
      }, 
    }))
    setIsShowForm(!isShowForm)
  }

  return (
    <div>
      <h3 style={{marginBottom: "12px"}}>Personal Information</h3>
        <S.DetailContainer>
          <S.DetailItem>
            <span>Name:</span>
            <h4>{userInfo.data.name}</h4>
          </S.DetailItem>
          <S.DetailItem>
            <span>Email:</span>
            <h4>{userInfo.data.email}</h4>
          </S.DetailItem>
        </S.DetailContainer>
      <Row justify='end'>
        <Button style={{marginBottom: "16px", width: "100px"}} onClick={() => setIsShowForm(!isShowForm)}>
          {isShowForm ? `Cancel` : `Edit`}
        </Button>
      </Row>
      {/* {isShowForm && ( */}
        <S.FormContainer isShowForm={isShowForm}>
          <Form
          form={changeDetailForm}
          name="changeDetailForm"
          layout="vertical"
          initialValues={initialValues}
          onFinish={(values) => handleChangeDetail(values)}
        >
          <Form.Item
            label="Name"
            name="newName"
            rules={[{ required: true, message: "Required!" }]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="Email"
            name="newEmail"
            rules={[{ required: true, message: "Required!" }]}
          >
            <Input/>
          </Form.Item>
          <Row justify='end'>
          <Button style={{marginBottom: "16px", width: "100px"}} htmlType="submit" type="primary">
            Confirm
          </Button>
          </Row>
          </Form>
        </S.FormContainer>
    </div>
  )
}

export default Detail

