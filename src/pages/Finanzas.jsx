// src/pages/Finanzas.jsx
import React from 'react';
import { Form, InputNumber, Select, Button, Card, Space } from 'antd';

const { Option } = Select;

const Finanzas = () => {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <div className="hero-bg">
        <h2>Punto de Venta (POS)</h2>
      </div>
      <Card style={{ borderRadius: 12, marginTop: 32 }}>
        <Form layout="vertical">
          <Form.Item label="Monto" name="monto" rules={[{ required: true }]}>
            <InputNumber
              style={{ width: '100%', borderRadius: 12 }}
              placeholder="Ingrese Monto"
              prefix="$"
            />
          </Form.Item>
          <Form.Item label="Método de Pago" name="metodo" rules={[{ required: true }]}>
            <Select placeholder="Seleccione Método" style={{ borderRadius: 12 }}>
              <Option value="efectivo">Efectivo</Option>
              <Option value="tarjeta">Tarjeta</Option>
              <Option value="transferencia">Transferencia</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" style={{ borderRadius: 12, backgroundColor: 'var(--color-vino)', borderColor: 'var(--color-vino)' }}>
                Cobrar
              </Button>
              <Button style={{ borderRadius: 12 }}>Cancelar</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Finanzas;