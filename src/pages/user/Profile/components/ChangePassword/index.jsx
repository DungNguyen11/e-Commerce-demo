import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
  Form,
  Input,
  Button
} from "antd";

import { changePassWordAction } from "../../../../../redux/actions";

const ChangePassword = () => {

  const [changePasswordForm] = Form.useForm();

  const { userInfo } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();

  const handleChangePassword = (values) => {
    dispatch(changePassWordAction({
      id: userInfo.data.id,
      data: {
        email: userInfo.data.email,
        ...values,
      }, 
      callback: {
        clearForm: () => changePasswordForm.resetFields(),
      }, 
    }))
  }

  return (
    <div>
      <Form
        form={changePasswordForm}
        name="changePasswordForm"
        layout="vertical"
        initialValues={{
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        onFinish={(values) => handleChangePassword(values)}
      >
        <Form.Item
          label="Current Password"
          name="oldPassword"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm New Password"
          name="confirmPassword"
          hasFeedback
          rules={[
          {
              required: true,
              message: 'Required!',
          },
          ({ getFieldValue }) => ({
              validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
          }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Button htmlType="submit" type="primary">
          Confirm
        </Button>
      </Form>
    </div>
  )
}

export default ChangePassword
