import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/SidebarDesktop';
import { useNavigate } from 'react-router-dom';

const LayoutWrapper = ({ children }) => {
  const [activePage, setActivePage] = React.useState('');
  const [isMinimized, setIsMinimized] = React.useState(false);

  const navigate = useNavigate();

  const handleActivePage = (page) => {
    setActivePage(page);
    navigate(`/${page}`);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        activePage={activePage}
        handleActivePage={handleActivePage}
        isMinimized={isMinimized}
        setIsMinimized={setIsMinimized}
      />
      <div
        style={{
          width: '100%',
          maxWidth: '100%',
          transition: 'margin-left 0.2s',
          marginLeft: '0',
        }}
      >
        <Navbar />
        <div style={{ marginLeft: isMinimized ? '-185px' : 0 }}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
