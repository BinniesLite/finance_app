import { useEffect, useState, useContext } from 'react';
import { useAuthContext } from '../../../hooks/useAuthContext';

//components
import Stack from '@mui/material/Stack';
import CustomTabs from '../../general/CustomTabs';
import TableData from '@/components/general/TableData/TableData';
import WalletContent from './components/WalletsView/WalletContent';
import Section from '@/components/layout/Section/Section';

//api
import AppContext from '../../../context/app/context';

//css
import './WalletsPage.css';

const WalletsPage = () => {
  const { getWallets, wallets } = useContext(AppContext);
  const [walletData, setWalletData] = useState([]);
  const { user } = useAuthContext();
  var [activeTab, setView] = useState(0);
  const changeView = (event, newView) => {
    setView(newView);
  };


  // CORS
  useEffect(() => {
    const fetchWallets = async () => {
      await getWallets();
      setWalletData(wallets);
    };
  
    if (user) {
      fetchWallets();
    }
  }, []);

  const tabs = [
    {
      id: 'list',
      label: 'List',
      component: <TableData data={walletData} />,
    },
    {
      id: 'grid',
      label: 'Grid',
      component: <WalletContent data={walletData} />,
    },
  ];

  return (
    <Section title={'Wallets'}>
      <Stack
        direction={{ xs: 'column', md: 'row', width: '100%' }}
        columnGap={3}
      >
        <Stack flexDirection='column' width='100%' ml={2}>
          <CustomTabs
            tabs={tabs}
            activeTab={activeTab}
            handleChangeTab={changeView}
          />
        </Stack>
      </Stack>
      {tabs[activeTab].component}
    </Section>
  );
};

export default WalletsPage;
