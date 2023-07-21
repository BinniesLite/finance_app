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

import CustomTable from "../../general/table/CustomTable";
import Section from "../../layout/Section/Section";
import TransactionGridView from "./components/TransactionGridView/TransactionGridView";
import { formatTransactionList, generateFakeTransactionData, generateFakeWallets, pushTransactions, pushWallets } from "../../../utils/helper";
import { getTransactions } from "../../../utils/http-request";

const TransactionPage = () => {
  // const appContext = useContext(AppContext);
  var [activeTab, setView] = useState(0);

  const changeView = (event, newView) => {
    setView(newView);
  };
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    const feedData = async () => {
      const wallets = generateFakeWallets(10);
      try {
        await pushWallets(wallets);
      } catch(error) {
        console.log(error);
      }
      
      try {
        const trans = await generateFakeTransactionData(10);
        console.log(trans);
        await pushTransactions(trans);
      }
      catch(error) {
        console.log(error);
      }
    };
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
    feedData();
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
