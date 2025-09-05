import React from 'react';
import { Card, Statistic, Button, Space } from 'antd';
import {
  PlusOutlined,
  TableOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  RestOutlined,              // válido
  UnorderedListOutlined,     // válido
  ExclamationCircleOutlined  // válido
} from '@ant-design/icons';

const Dashboard = () => {
  return (
    <div>
      <div className="hero-bg">
        <h2>Dashboard General</h2>
      </div>

      <Space size="large" style={{ marginBottom: 32 }}>
        <Card style={{ borderRadius: 12, width: 220 }}>
          <Statistic
            title={<span><DollarOutlined style={{ color: '#C19A3A', marginRight: 8 }} />Ventas del día</span>}
            value={1245}
            prefix="$"
          />
        </Card>
        <Card style={{ borderRadius: 12, width: 220 }}>
          <Statistic
            title={<span><RestOutlined style={{ color: '#C19A3A', marginRight: 8 }} />Mesas ocupadas</span>}
            value={12}
          />
        </Card>
        <Card style={{ borderRadius: 12, width: 220 }}>
          <Statistic
            title={<span><UnorderedListOutlined style={{ color: '#C19A3A', marginRight: 8 }} />Pedidos activos</span>}
            value={8}
          />
        </Card>
        <Card style={{ borderRadius: 12, width: 220 }}>
          <Statistic
            title={<span><ExclamationCircleOutlined style={{ color: '#C19A3A', marginRight: 8 }} />Alertas inventario</span>}
            value={3}
          />
        </Card>
      </Space>

      <Space size="middle">
        <Button type="primary" icon={<PlusOutlined />} style={{ borderRadius: 12, backgroundColor: 'var(--color-vino)', borderColor: 'var(--color-vino)' }}>
          Nuevo Pedido
        </Button>
        <Button type="primary" icon={<TableOutlined />} style={{ borderRadius: 12, backgroundColor: 'var(--color-oliva)', borderColor: 'var(--color-oliva)' }}>
          Asignar Mesa
        </Button>
        <Button type="primary" icon={<ShoppingCartOutlined />} style={{ borderRadius: 12, backgroundColor: 'var(--color-rojo-quemado)', borderColor: 'var(--color-rojo-quemado)' }}>
          Cobrar
        </Button>
      </Space>
    </div>
  );
};

export default Dashboard;
