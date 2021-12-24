import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Form, Input, Button, Checkbox } from 'antd';
import * as S from './style'

import { loginAction } from '../../../redux/actions'
import { ROUTER } from "../../../constants/router";


const LoginFormPage = ({setIsLogin}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [loginForm] = Form.useForm();

    const { responseAction } = useSelector(state => state.authReducer)

    useEffect(() => {
        if(responseAction.login.error && !responseAction.login.loading) {
            loginForm.setFields([
                {
                name: 'email',
                errors: [" "],
                },
                {
                name: 'password',
                errors: [responseAction.login.error],
                },
            ]);
        }
    }, [responseAction.login])

    const handleLogin = (values) => {
        dispatch(loginAction({
            data: values,
            callback: {
                redirectHome: () => history.push(ROUTER.USER.HOME)
            }
        }))
    }

    return (
        <>
        <S.LoginTitle>
        <h3>SIGN IN</h3>
        <Form
            form={loginForm}
            name="login"
            layout='vertical'
            labelCol={{ span: 8,}}
            wrapperCol={{span: 24, }}
            initialValues={{remember: true}}
            onFinish={(values) => handleLogin(values)}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
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
                name="remember"
                valuePropName="checked"
                wrapperCol={{span: 16, }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    SIGN IN
                </Button>
            </Form.Item>
        </Form>
    </S.LoginTitle>
    <S.LoginNewRegister>
        <p>New customer? Create an account to enjoy exclusive access and personalized services</p>
        <Button 
            block

            onClick={() => setIsLogin(false)}
        >CREATE NEW ACCOUNT</Button>
    </S.LoginNewRegister>
    </>
    )
}

export default LoginFormPage