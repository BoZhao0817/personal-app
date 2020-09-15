import React from "react";
import InputItem from "../InputItem";
import styles from "./index.module.less";
import {Form} from "antd";

const Register = () => {
    return(
        <div className={styles.registerContainer}>
            <div className={styles.register}>
                <Form>
                    <InputItem
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
                                message:"please input a valid address!"
                            }
                        ]}
                    />

                </Form>


            </div>

        </div>
    )
}

export default Register;