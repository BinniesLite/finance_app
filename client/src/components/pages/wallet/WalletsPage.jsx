import { useEffect, useState, useContext, useMemo } from 'react';

//components
import Stack from '@mui/material/Stack';
import CustomTabs from '@/components/general/CustomTabs';
import TableData from '@/components/general/TableData/TableData';
import WalletContent from './components/WalletsView/WalletContent';
import Section from '../../Layout/Section/Section';

//api
import AppContext from '@/context/app/context';


//css
import './WalletsPage.css';

const WalletsPage = () => {
  const appContext = useContext(AppContext);
  var [activeTab, setView] = useState(0);

  const changeView = (event, newView) => {
    setView(newView);
  };

  const {wallets, loading, getWallets} = appContext;

  useEffect(() => {
    const fetchWallets = async () => {
      await getWallets();
    };
    
    fetchWallets();
  }, []); // Use the memoized function as a dependency instead of getWallets

  // useEffect(() => {
  //   setWalletData(appContext.wallets);
  // }, [appContext.wallets]);

  const tabs = [
    {
      id: 'list',
      label: 'List',
      component: <TableData data={wallets} loading={loading} />,
    },
    {
      id: 'grid',
      label: 'Grid',
      component: <WalletContent data={wallets} loading={loading} />,
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
      {wallets  && 
        tabs[activeTab].component}
    </Section>
  );
};

export default WalletsPage;
