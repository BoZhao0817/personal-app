import React, {useState} from "react";
import InputItem from "../InputItem";
import styles from "./index.module.less";
// https://2x.ant.design/components/icon/
import {Form, Popover, Progress} from "antd";
import {LockTwoTone, MailTwoTone} from "@ant-design/icons";

const Register = () => {
    // popover
    const [visible, setVisible] = useState(false);
    // change state to re-render popover
    const [popover, setPopover] = useState(false);
    const [form] = Form.useForm();
    const handleFinish = (values) => {
        console.log(values)
    }
    // value is the confirmed pwd used to compare with the value of the pwd, "_" is related to form
    const checkConfirm = (_, value) => {
        const promise = Promise;
        if (value && value !== form.getFieldValue('password')) {
            return promise.reject('password not matched!')
        }
        return promise.resolve();

    }

    // check if pwd changed
    const checkPassword = (_,value) => {
        // API
        const promise = Promise;
        if (!value){
            // blank --> false
            setVisible(!!value);
            return promise.reject('please input your password!');
        }
        if (!visible) {
            // change it true or false
            setVisible(!!value);
        }
        setPopover(!popover);
        if (value && form.getFieldValue('confirm')){
            form.validateFields(['confirm']);
        }
        return promise.resolve();
    }

    // pwd
    const renderPasswordProgress = () => {
        const value = form.getFieldValue('password');
        // if value return progress bar
        return value && value.length && (
            <div>
                <Progress
                    strokeWidth={6}
                    // length > 10, 100 percent
                    percent={value.length * 10 > 100 ? 100 : value.length * 10}
                >

                </Progress>
            </div>
        )
    }

    return(
        <div className={styles.registerContainer}>
            <div className={styles.register}>
                <Form
                    form={form}
                    onFinish={handleFinish}
                >
                    <InputItem
                        prefix = {
                            <MailTwoTone style={{color:'#1890ff'}}/>
                        }
                        name="mail"
                        placeholder = "mail"
                        size = "large"
                        // 表单校验
                        rules={[
                            {
                                required:true,
                                message:"please input your email address!"
                            },
                            {
                                type: 'email',
                                message:"please input a valid email address!"
                            }
                        ]}
                    />
                    <Popover
                        content={
                            visible && (
                                <div>
                                {/*only render once*/}
                                {renderPasswordProgress()}
                                <div>
                                    please input at least 6 characters!
                                </div>

                            </div>
                            )

                        }
                        overlayStyle={{width:240}}
                        placement="bottomRight"
                        visible={visible}
                    >
                        <InputItem
                            name="password"
                            prefix = {
                                <LockTwoTone style={{color:'#1890ff'}}/>
                            }
                            placeholder = "at least 6 characters"
                            size = "large"
                            type="password"
                            rules={[
                                {
                                    validator: checkPassword,
                                }

                            ]}
                        />
                        <InputItem
                            name="confirm"
                            prefix = {
                                <LockTwoTone style={{color:'#1890ff'}}/>
                            }
                            placeholder = "please confirm your password"
                            size = "large"
                            type="password"
                            rules={[
                                {
                                    required:true,
                                    message:"please input your password!"
                                },
                                {
                                    validator:checkConfirm,
                                }
                            ]}
                        />
                    </Popover>


                </Form>


            </div>

        </div>
    )
}

export default Register;