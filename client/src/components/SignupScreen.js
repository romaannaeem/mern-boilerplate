import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Layout, Form, Input, Button, Typography } from 'antd';
import axios from 'axios';

const { Title } = Typography;

export default function SignupScreen() {
  let history = useHistory();

  const onSubmit = (values) => {
    console.log(values);

    axios
      .post(
        '/auth/signup',
        {
          username: values.username,
          password: values.password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log('successful signup');
          history.push('/login');
        } else {
          console.log('username already taken');
        }
      });
  };

  const onSubmitFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout style={{ minHeight: '100vh', padding: '10%' }} className="layout">
      <div style={{ textAlign: 'center', paddingBottom: '4%' }}>
        <Title>Sign Up</Title>
        <p>
          Access all your past, current, and future projects on the client
          dashboard.
        </p>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}></div>
        <Form
          style={{ flex: 2 }}
          name="signup"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          onFinishFailed={onSubmitFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password.' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
          <Link to="/login">
            <p>Already have an account? Log In instead.</p>
          </Link>
        </Form>
        <div style={{ flex: 1 }}></div>
      </div>
    </Layout>
  );
}
