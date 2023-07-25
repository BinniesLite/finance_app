import { useContext, useState, useEffect, useCallback } from "react";
import "./Transactions.css";
import { Stack } from "@mui/material";
import CustomTabs from "@/components/general/CustomTabs";

import Section from "../../Layout/Section/Section";
import TransactionGridView from "./components/TransactionGridView/TransactionGridView";
import {
  formatTransactionList,
  generateFakeTransactionData,
  generateFakeWallets,
  pushTransactions,
  pushWallets,
} from "@/utils/helper";
// import { getTransactions } from "@/utils/http-request";
import AppContext from "@/context/app/context";
import CustomTable from "../../general/table/CustomTable";

const TransactionPage = () => {
  const [activeTab, setView] = useState(0);
  const [transactionData, setTransactionData] = useState([]);
  
  const {transactions, getTransactions, loading} = useContext(AppContext);
  const changeView = (event, newView) => {
    setView(newView);
  };
  
  
  useEffect(() => {
    const feedData = async () => {
      const wallets = generateFakeWallets(1);
      try {
        await pushWallets(wallets);
      } catch (error) {
        console.log(error);
      }

      try {
        const trans = await generateFakeTransactionData(1);
        console.log(trans);
        await pushTransactions(trans);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTransactions = async () => {
      try {
        await getTransactions();
        // memoize the function
        const formattedTransaction = await formatTransactionList(transactions);
        
        setTransactionData(formattedTransaction);
        
      } catch (error) {
        console.log(error);
      }
    };
    if (transactions.length === 0 || transactionData.length === 0) {
      // feedData();
      fetchTransactions();
    }
    

  }, [transactionData]);
  

  const tabs = [
    {
      id: "list",
      label: "List",
      component: <CustomTable transactions={transactions} loading={loading} />,
    },
    {
      id: "grid",
      label: "Grid",
      component: <TransactionGridView transactions={transactions} />,
    },
  ];
  return (
    <div>
      <Section title={"Transaction"}>
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
    </div>
  );
};

export default TransactionPage;
