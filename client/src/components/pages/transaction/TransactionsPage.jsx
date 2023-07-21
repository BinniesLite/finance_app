import { React, useState, useEffect, useContext } from 'react';

import { Stack } from '@mui/material';

//components
import CustomTabs from '../../general/CustomTabs';
import CustomTable from '../../general/table/CustomTable';
import Section from '../../Layout/Section/Section';
import TransactionGridView from './components/TransactionGridView/TransactionGridView';
import { formatTransactionList } from '../../../utils/helper';

//api
// import AppContext from '../../../context/app/context';
import { getTransactions } from '../../../utils/http-request';

//styles
import './Transactions.css';

const TransactionPage = () => {
  // const appContext = useContext(AppContext);
  var [activeTab, setView] = useState(0);

  const changeView = (event, newView) => {
    setView(newView);
  };
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await getTransactions();
        const formattedTransaction = await formatTransactionList(response);
        setTransactionData(formattedTransaction);
        // await appContext.getTransactions();
        // const formattedTransaction = await formatTransactionList(transactionData);
        // setTransactionData(formattedTransaction);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransactions();
  }, []);

  // useEffect(() => {
  //   setTransactionData(appContext.transactions);
  // }, [appContext.transactions]);

  const tabs = [
    {
      id: 'list',
      label: 'List',
      component: <CustomTable data={transactionData} />,
    },
    {
      id: 'grid',
      label: 'Grid',
      component: <TransactionGridView transactions={transactionData} />,
    },
  ];
  return (
    <div>
      <Section title={'Transaction'}>
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
    </div>
  );
};

export default TransactionPage;
