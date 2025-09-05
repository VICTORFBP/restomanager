import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, SettingOutlined, DollarOutlined, BarChartOutlined } from '@ant-design/icons';

const { Item } = Menu;

const Header = () => {
  const location = useLocation();
  const selectedKey = location.pathname === '/' ? 'dashboard' : location.pathname.slice(1);

  return (
    <header style={{ marginBottom: 20 }}>
      <h1 style={{ color: '#8B3A3A', fontFamily: 'Inter', fontWeight: 700, fontSize: 32 }}>RestoManager</h1>
      <Menu mode="horizontal" selectedKeys={[selectedKey]} style={{ borderBottom: 'none' }}>
        <Item key="dashboard" icon={<HomeOutlined />}>
          <Link to="/">Dashboard</Link>
        </Item>
        <Item key="operaciones" icon={<SettingOutlined />}>
          <Link to="/operaciones">Operaciones</Link>
        </Item>
        <Item key="administracion">
          <Link to="/administracion">Administración</Link>
        </Item>
        <Item key="finanzas" icon={<DollarOutlined />}>
          <Link to="/finanzas">Finanzas</Link>
        </Item>
        <Item key="reportes" icon={<BarChartOutlined />}>
          <Link to="/reportes">Reportes & Notificaciones</Link>
        </Item>
      </Menu>
    </header>
  );
};

export default Header;