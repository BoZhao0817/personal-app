import React from "react";
import {Tabs,Form} from "antd";
import styles from './index.module.less';
import InputItem from "../InputItem";
import SubmitButton from "../SubmitButton";
import {UserOutlined, LockTwoTone } from '@ant-design/icons';

const { TabPane } = Tabs

const Login = () => {
    // hooks
    const [form] = Form.useForm();
    // value: object
    const handleFinish = (values) => {
        console.log(values)
    }
    return(
        // camel cases
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <Form
                    form={form}
                    onFinish={handleFinish}
                >
                    <Tabs defaultActiveKey='1'>
                        <TabPane tab="Login" key='1'>
                            <InputItem
                                name="username"
                                prefix = {
                                    <UserOutlined style={{color:'#1890ff'}}/>
                                }
                                placeholder = "userName"
                                size = "large"
                                // 表单校验
                                rules={[
                                    {
                                        required:true,
                                        message:"please input username!"
                                    }
                                ]}
                            />
                            <InputItem
                                name="password"
                                prefix = {
                                    <LockTwoTone style={{color:'#1890ff'}}/>
                                }
                                placeholder = "password"
                                size = "large"
                                type="password"
                                rules={[
                                    {
                                        required:true,
                                        message:"please input password!"
                                    }
                                ]}
                            />
                        </TabPane>
                        <TabPane tab="Phone" key='2'>

                        </TabPane>
                    </Tabs>
                    <SubmitButton> Login</SubmitButton>
                </Form>

            </div>
        </div>
    )
}

export default Login;