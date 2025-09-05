import React from 'react';
import { Table, Button, Space, Card, Tag } from 'antd';
import { CalendarOutlined, DownloadOutlined, ExclamationCircleOutlined, CarOutlined } from '@ant-design/icons';

const ventas = [
  { key: '1', fecha: '2024-06-01', total: '$5,000' },
  { key: '2', fecha: '2024-06-02', total: '$7,000' },
];

const notificaciones = [
  { key: '1', tipo: 'Inventario', mensaje: 'Stock bajo en Tomate', icon: <ExclamationCircleOutlined /> },
  { key: '2', tipo: 'Pedido', mensaje: 'Pedido P001 listo para entregar', icon: <CarOutlined /> },
];

const Reportes = () => {
  const handleExport = () => {
    alert('Exportando CSV...');
  };

  return (
    <div>
      <div className="hero-bg">
        <h2>Reportes y Notificaciones</h2>
      </div>
      <h3 style={{ marginTop: 32 }}>Reportes</h3>
      <Space style={{ marginBottom: 16 }}>
        <div style={{ borderRadius: 12, padding: 8, border: '1px solid var(--color-dorado)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <CalendarOutlined />
          <input type="date" style={{ border: 'none', outline: 'none' }} placeholder="Fecha Inicio" />
        </div>
        <div style={{ borderRadius: 12, padding: 8, border: '1px solid var(--color-dorado)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <CalendarOutlined />
          <input type="date" style={{ border: 'none', outline: 'none' }} placeholder="Fecha Fin" />
        </div>
        <Button type="primary" icon={<DownloadOutlined />} onClick={handleExport} style={{ borderRadius: 12, backgroundColor: 'var(--color-vino)', borderColor: 'var(--color-vino)' }}>
          Exportar CSV
        </Button>
      </Space>
      <Table dataSource={ventas} pagination={false} style={{ marginBottom: 32 }}>
        <Table.Column title="Fecha" dataIndex="fecha" key="fecha" />
        <Table.Column title="Total" dataIndex="total" key="total" />
      </Table>
      <h3>Notificaciones</h3>
      {notificaciones.map(({ key, tipo, mensaje, icon }) => (
        <Card key={key} style={{ borderRadius: 12, marginBottom: 8 }}>
          <Space>
            {icon}
            <Tag color={tipo === 'Inventario' ? 'red' : 'green'}>{tipo}</Tag>
            {mensaje}
          </Space>
        </Card>
      ))}
    </div>
  );
};

export default Reportes;
