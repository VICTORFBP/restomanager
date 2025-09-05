import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header.jsx';

const MainLayout = () => {
  return (
    <div style={{ maxWidth: 1440, margin: '0 auto', padding: 20 }}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;