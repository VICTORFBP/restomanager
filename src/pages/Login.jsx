import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Login success:', values);
    navigate('/');
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--color-beige)' }}>
      <Card
        style={{ width: 400, borderRadius: 12, boxShadow: '0 4px 12px rgba(139,58,58,0.3)' }}
        bodyStyle={{ display: 'flex', flexDirection: 'column', gap: 20 }}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="email" rules={[{ required: true, message: 'Por favor ingrese su email!' }]}>
            <Input size="large" placeholder="Correo electrónico" prefix={<MailOutlined style={{ color: 'var(--color-vino)' }} />} style={{ borderRadius: 12 }} />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Por favor ingrese su contraseña!' }]}>
            <Input.Password size="large" placeholder="Contraseña" prefix={<LockOutlined style={{ color: 'var(--color-vino)' }} />} style={{ borderRadius: 12 }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block style={{ borderRadius: 12, backgroundColor: 'var(--color-vino)', borderColor: 'var(--color-vino)' }}>
              Ingresar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;