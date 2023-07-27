import React from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import Sidebar from '../../Layout/Sidebar/SidebarDesktop';
import { useNavigate } from 'react-router-dom';
import Chat from '../../chat/Chat';


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
      <Chat />
      <div
        style={{
          width: '100%',
          marginLeft: '0',
        }}
      >
        
       <Navbar/>
        <div style={{ marginLeft: isMinimized ? '-185px' : 0, marginRight: '30px'}}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutWrapper;