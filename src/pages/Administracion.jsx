// src/pages/Administracion.jsx
import React from 'react';
import { Table, Tag, Space, Button, Row, Col, Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const usuarios = [
  { key: '1', nombre: 'Carlos Ruiz', email: 'carlos@resto.com', rol: 'Administrador' },
  { key: '2', nombre: 'María López', email: 'maria@resto.com', rol: 'Mesero' },
];

const platos = [
  {
    key: '1',
    nombre: 'Ensalada César',
    precio: 1200,
    imagen: 'https://placehold.co/300x200/D4AF37/8B3A3A?text=Ensalada+César',
  },
  {
    key: '2',
    nombre: 'Pizza Margarita',
    precio: 1800,
    imagen: 'https://placehold.co/300x200/8B3A3A/FAF7F2?text=Pizza+Margarita',
  },
];

const inventario = [
  { key: '1', producto: 'Tomate', stock: 20, umbral: 10 },
  { key: '2', producto: 'Queso', stock: 5, umbral: 10 },
];

const Administracion = () => {
  return (
    <div>
      <div className="hero-bg">
        <h2>Administración</h2>
      </div>

      <h3 style={{ marginTop: 32 }}>Usuarios</h3>
      <Table dataSource={usuarios} pagination={false} style={{ marginBottom: 32 }}>
        <Table.Column title="Nombre" dataIndex="nombre" key="nombre" />
        <Table.Column title="Email" dataIndex="email" key="email" />
        <Table.Column
          title="Rol"
          dataIndex="rol"
          key="rol"
          render={rol => (
            <Tag color={rol === 'Administrador' ? 'red' : 'green'}>{rol}</Tag>
          )}
        />
        <Table.Column
          title="Acciones"
          key="acciones"
          render={() => (
            <Space>
              <Button icon={<EditOutlined />} size="small">Editar</Button>
              <Button danger icon={<DeleteOutlined />} size="small">Eliminar</Button>
            </Space>
          )}
        />
      </Table>

      <h3>Carta Digital</h3>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        {platos.map(({ key, nombre, precio, imagen }) => (
          <Col key={key} xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt={nombre} src={imagen} style={{ borderRadius: '12px 12px 0 0' }} />}
              actions={[
                <Button type="link" icon={<EditOutlined />}>Editar</Button>,
                <Button type="link" danger icon={<DeleteOutlined />}>Eliminar</Button>,
              ]}
              style={{ borderRadius: 12 }}
            >
              <Card.Meta title={nombre} description={`$${precio}`} />
            </Card>
          </Col>
        ))}
      </Row>

      <h3>Inventario</h3>
      <Table dataSource={inventario} pagination={false}>
        <Table.Column title="Producto" dataIndex="producto" key="producto" />
        <Table.Column title="Stock" dataIndex="stock" key="stock" />
        <Table.Column title="Umbral" dataIndex="umbral" key="umbral" />
        <Table.Column
          title="Alerta"
          key="alerta"
          render={(record) =>
            record.stock <= record.umbral ? (
              <Tag color="red">Bajo Stock</Tag>
            ) : (
              <Tag color="green">Stock OK</Tag>
            )
          }
        />
      </Table>
    </div>
  );
};

export default Administracion;