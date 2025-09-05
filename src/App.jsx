import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Operaciones from './pages/Operaciones.jsx';
import Administracion from './pages/Administracion.jsx';
import Finanzas from './pages/Finanzas.jsx';
import Reportes from './pages/Reportes.jsx';
import MainLayout from './components/Layout/MainLayout.jsx';
import './styles/global.css';

const antTheme = {
  token: {
    colorPrimary: '#8B3A3A', // vino
    fontFamily: 'Inter, sans-serif',
    borderRadius: 12,
  },
};

function App() {
  return (
    <ConfigProvider theme={antTheme}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="operaciones" element={<Operaciones />} />
            <Route path="administracion" element={<Administracion />} />
            <Route path="finanzas" element={<Finanzas />} />
            <Route path="reportes" element={<Reportes />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;