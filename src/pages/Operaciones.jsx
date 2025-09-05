import React from 'react';
import { Badge, Card, Row, Col, Table, List, Tag, Button, Space, DatePicker } from 'antd';
import { EyeOutlined, SendOutlined } from '@ant-design/icons';

const mesas = [
  { id: 1, estado: 'Libre' },
  { id: 2, estado: 'Ocupada' },
  { id: 3, estado: 'Reservada' },
];

const pedidos = [
  { key: '1', id: 'P001', mesa: '3', estado: 'En preparación', total: 450 },
  { key: '2', id: 'P002', mesa: '1', estado: 'Listo', total: 320 },
];

const cocina = [
  { id: 'P001', estado: 'En preparación' },
  { id: 'P003', estado: 'En preparación' },
];

const reservas = [
  { key: '1', id: 'R001', nombre: 'Juan Pérez', fecha: '2024-06-10', mesa: '5' },
  { key: '2', id: 'R002', nombre: 'Ana Gómez', fecha: '2024-06-11', mesa: '2' },
];

const estadoColor = {
  Libre: 'success',
  Ocupada: 'error',
  Reservada: 'warning',
};

const Operaciones = () => {
  return (
    <div>
      <div className="hero-bg">
        <h2>Operaciones Diarias</h2>
      </div>

      <h3>Mesas</h3>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        {mesas.map(({ id, estado }) => (
          <Col key={id} xs={24} sm={12} md={8} lg={6}>
            <Badge status={estadoColor[estado]} text={`Mesa ${id} - ${estado}`} />
            <Card style={{ marginTop: 8, borderRadius: 12 }}>
              <Button block>Acción</Button>
            </Card>
          </Col>
        ))}
      </Row>

      <h3>Pedidos</h3>
      <Table dataSource={pedidos} pagination={false} style={{ marginBottom: 32 }}>
        <Table.Column title="ID" dataIndex="id" key="id" />
        <Table.Column title="Mesa" dataIndex="mesa" key="mesa" />
        <Table.Column
          title="Estado"
          dataIndex="estado"
          key="estado"
          render={estado => (
            <Tag color={estado === 'En preparación' ? 'orange' : 'green'}>{estado}</Tag>
          )}
        />
        <Table.Column title="Total" dataIndex="total" key="total" render={total => `$${total}`} />
        <Table.Column
          title="Acciones"
          key="acciones"
          render={(_, record) => (
            <Space>
              <Button icon={<EyeOutlined />} size="small">Ver</Button>
              <Button type="primary" icon={<SendOutlined />} size="small">Enviar a Cocina</Button>
            </Space>
          )}
        />
      </Table>

      <h3>Cocina</h3>
      <List
        dataSource={cocina}
        renderItem={item => (
          <List.Item actions={[<Button type="primary" size="small">Listo</Button>]}>
            <List.Item.Meta
              title={`Pedido ${item.id}`}
              description={<Tag color="orange">{item.estado}</Tag>}
            />
          </List.Item>
        )}
        style={{ marginBottom: 32 }}
      />

      <h3>Reservas</h3>
      <DatePicker style={{ marginBottom: 16, borderRadius: 12 }} placeholder="Filtrar por fecha" />
      <Table dataSource={reservas} pagination={false}>
        <Table.Column title="ID" dataIndex="id" key="id" />
        <Table.Column title="Nombre" dataIndex="nombre" key="nombre" />
        <Table.Column title="Fecha" dataIndex="fecha" key="fecha" />
        <Table.Column title="Mesa" dataIndex="mesa" key="mesa" />
      </Table>
    </div>
  );
};

export default Operaciones;