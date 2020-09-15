import React from "react";
import {Input, Form} from "antd";

// const InputItem = (props) => {
//     const {placeholder, size} = props
//         return (
//         // why not antd input but a new component
//         <Input placeholder={placeholder} size={size}/>
//     )
// }

const InputItem = (props) => {
    const {name, rules, ...rest} = props;
    return (
        // why not antd input but a new component
        <Form.Item name={name} rules={rules}>
            <Input {...rest}/>
        </Form.Item>

    )
}
export default InputItem;