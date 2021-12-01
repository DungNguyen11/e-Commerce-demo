import React, { useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import * as S from './style'

import { Form, Input, Button, Checkbox } from 'antd';

import { registerAction} from '../../../redux/actions'

const RegisterPage = ({setIsLogin}) => {

    const dispatch = useDispatch()
    
    const [registerForm] = Form.useForm();

    const { responseAction } = useSelector((state) => state.authReducer)

    const handleRegister = (values) => {
        dispatch(registerAction({
            data: {
                name: values.name,
                email: values.email,
                password: values.password,
            },
            callback: {
                goBackLogin: () => setIsLogin(true)
            }
        }))
    }

    useEffect(() => {
        if (responseAction.register?.error) {
        //   setError("email", {
        //     type: "manual",
        //     message: responseAction.register.error,
        //   });
          registerForm.setFields([
            {
              name: 'email',
              errors: [responseAction.register.error],
            },
          ]);
        }
      }, [responseAction.register.error])

    const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 24,
            offset: 0,
          },
        },
      };

    return (
        <>
        <S.LoginTitle>
            <h3>CREATE NEW ACCOUNT</h3>
            <Form
                form={registerForm}
                name="register"
                layout='vertical'
                labelCol={{ span: 8,}}
                wrapperCol={{span: 24, }}
                initialValues={{remember: true}}
                onFinish={(values) => handleRegister(values)}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                        {
                            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: 'Your email is not valid',
            
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                    I agree to the Terms and Conditions and the Privacy Policy.
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                    CREATE NEW ACCOUNT
                    </Button>
                </Form.Item>
            </Form>
        </S.LoginTitle>
        <S.LoginNewRegister>
            <p>Returning Customer?</p>
            <Button 
                block
                onClick={() => setIsLogin(true)}
            >SIGN IN</Button>
        </S.LoginNewRegister>
        </>
    )
}

export default RegisterPage
