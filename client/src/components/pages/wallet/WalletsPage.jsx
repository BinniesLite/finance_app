import { useEffect, useState, useContext } from 'react';

//components
import Stack from '@mui/material/Stack';
import CustomTabs from '../../general/CustomTabs';
import TableData from '../../general/TableData/TableData';
import WalletContent from './components/WalletsView/WalletContent';
import Section from '../../Layout/Section/Section';

//api
import AppContext from '../../../context/app/context';
import { getWallets } from '../../../utils/http-request';
import { formatWalletList } from '../../../utils/helper';


//css
import './WalletsPage.css';

const WalletsPage = () => {
  // const appContext = useContext(AppContext);
  var [activeTab, setView] = useState(0);

  const changeView = (event, newView) => {
    setView(newView);
  };

  const [walletData, setWalletData] = useState([]);

  // CORS

  useEffect(() => {
    const fetchWallets = async () => {
      const response = await getWallets();
      const formattedWallet = await formatWalletList(response);
      setWalletData(formattedWallet);
      // setWalletData(appContext.wallets);
    };

    fetchWallets();
  }, []);

  // useEffect(() => {
  //   setWalletData(appContext.wallets);
  // }, [appContext.wallets]);

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
