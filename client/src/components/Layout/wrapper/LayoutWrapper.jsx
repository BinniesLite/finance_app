import React from 'react'
import Navbar from '../NavBar/NavBar'
import Sidebar from '../Sidebar/SidebarDesktop'
import { useNavigate } from 'react-router-dom'

const LayoutWrapper = ({children}) => {
  const [activePage, setActivePage] = React.useState('');
  const navigate = useNavigate();

  const handleActivePage = (page) => {
    setActivePage(page);
    navigate(`/${page}`);
  }

  return (
    <div>
        <Navbar />
        <Sidebar activePage={activePage} handleActivePage={handleActivePage} />
        {children}
    </div>
  )
}

export default LayoutWrapper