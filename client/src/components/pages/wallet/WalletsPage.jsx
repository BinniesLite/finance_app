import { useEffect, useState } from 'react';

//components
import Stack from '@mui/material/Stack';
import CustomTabs from '../../general/CustomTabs';
import TableData from '../../layout/TableData/TableData';
import WalletContent from '../WalletsView/WalletContent';
import Section from '../../layout/Section/Section';

//api
import { getTransactions } from '../../../utils/http-request';

//css
import './WalletsPage.css';

const WalletsPage = () => {
  const [view, setView] = useState('grid');

  const handleChangeView = (event, newValue) => {
    setView(newValue);
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await getTransactions();
      
    };

    fetchTransactions();
  }, []);

  return (
    <Section title={'Wallets'}>
      <Stack direction={{ xs: 'column', md: 'row', width: '100%' }} columnGap={3}>
        <Stack flexDirection='column' width='100%' ml={2}>
          <CustomTabs value={view} handleChange={handleChangeView} />
          {view === 'grid' ? <WalletContent /> : <TableData />}
        </Stack>
      </Stack>
    </Section>
  );
};

export default WalletsPage;
