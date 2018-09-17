import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox,Layout} from 'antd';
import '../css/login.css';
const FormItem = Form.Item;
const {Content} = Layout;

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {validateFields} = this.props.form;
        validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                window.sessionStorage.removeItem("userId");
                window.sessionStorage.setItem("userId","100000002");
                console.log(this.props.url);
                window.location.href=this.props.url;
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Layout>
                <Content className="content">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {

                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder="Username"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                       placeholder="Password"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">Forgot password</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </FormItem>
                    </Form>
                </Content>
            </Layout>
        );
    }

}

const Login = Form.create()(LoginForm);
export default Login;