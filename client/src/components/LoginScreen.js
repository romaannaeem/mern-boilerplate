import React, { Component } from 'react';
import { Layout, Form, Input, Button, Typography } from 'antd';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import axios from 'axios';

const { Title } = Typography;

class LoginScreen extends Component {
  onSubmit = (values) => {
    axios
      .post(
        '/auth/login',
        {
          username: values.username,
          password: values.password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log('login response', response);

        if (response.status === 200) {
          console.log(`You logged in, ${response.data.username}`);
          window.location.replace('/');
        }
      })
      .catch((error) => {
        console.log('login error: ', error);
      });
  };

  onSubmitFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case '':
        return (
          <Layout
            style={{ minHeight: '100vh', padding: '10%' }}
            className="layout"
          >
            <div style={{ textAlign: 'center', paddingBottom: '4%' }}>
              <Title>Log In</Title>
              <p>
                Access all your past, current, and future projects on the client
                dashboard.
              </p>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 1 }}></div>
              <Form
                style={{ flex: 2 }}
                name="login"
                initialValues={{ remember: true }}
                onFinish={this.onSubmit}
                onFinishFailed={this.onSubmitFailed}
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
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Log In
                  </Button>
                </Form.Item>
                <Link to="/signup">
                  <p>No account? Sign up.</p>
                </Link>
              </Form>

              <div style={{ flex: 1 }}></div>
            </div>
          </Layout>
        );
      default:
        return <Redirect to="/" />;
    }
  };

  render() {
    return <>{this.renderContent()}</>;
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps, actions)(LoginScreen);
