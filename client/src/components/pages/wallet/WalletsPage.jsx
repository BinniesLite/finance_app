import { useEffect, useState } from 'react';

//components
import Stack from '@mui/material/Stack';
import CustomTabs from '../../general/CustomTabs';
import TableData from '../../general/TableData/TableData';
import WalletContent from './components/WalletsView/WalletContent';
import Section from '../../layout/Section/Section';

//api
import { getTransactions } from '../../../utils/http-request';

//css
import './WalletsPage.css';

const WalletsPage = () => {
  var [activeTab, setView] = useState(0);

  const changeView = (event, newView) => {
    setView(newView);
  };

  const tabs = [
    {
      id: "list",
      label: "List",
      component: <TableData />,
    },
    {
      id: "grid",
      label: "Grid",
      component: <WalletContent />,
    },
  ];

  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await getTransactions();
      
    };

    fetchTransactions();
  }, []);

  return (
    <Section title={"Wallets"}>
      {/* <Stack direction={{ xs: 'column', md: 'row', width: '100%' }} columnGap={3}>
        <Stack flexDirection='column' width='100%' ml={2}>
          <CustomTabs value={view} handleChange={handleChangeView} />
          {view === 'grid' ? <WalletContent /> : <TableData />}
        </Stack>
      </Stack> */}
      <Stack
        direction={{ xs: "column", md: "row", width: "100%" }}
        columnGap={3}
      >
        <Stack flexDirection="column" width="100%" ml={2}>
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
