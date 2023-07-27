import { useContext, useState, useEffect, useCallback } from "react";
import "./Transactions.css";
import { Stack } from "@mui/material";
import CustomTabs from "@/components/general/CustomTabs";

import Section from "@/components/layout/Section/Section";
import TransactionGridView from "./components/TransactionGridView/TransactionGridView";
import {
  formatTransactionList,
  generateFakeTransactionData,
  generateFakeWallets,
  pushTransactions,
  pushWallets,
  
} from "@/utils/helper";

import AppContext from "@/context/app/context";
import CustomTable from "../../general/table/CustomTable";

const TransactionPage = () => {
  const [activeTab, setView] = useState(0);
  const [transactionData, setTransactionData] = useState([]);
  
  const {transactions, getTransactions, loading} = useContext(AppContext);
  const changeView = (event, newView) => {
    setView(newView);
  };
  
  
  // useEffect(() => {
  //   const feedData = async () => {
  //     const wallets = generateFakeWallets(1);
  //     try {
  //       await pushWallets(wallets);
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     try {
  //       const trans = await generateFakeTransactionData(1);
  //       console.log(trans);
  //       await pushTransactions(trans);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   const fetchTransactions = async () => {
  //     await getTransactions();
  //   };

  //   const formatData = async () => {
  //     try {
  //       const formattedData = await formatTransactionList(transactions);
  //       return formattedData;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   if (transactions.length === 0) {
  //     // feedData();
  //     fetchTransactions();
  //   }
  // }, []);

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
        await getTransactions();
      };

    const fetchAndFormatTransactions = async () => {
      if (transactions.length === 0) {
        // If there are no transactions in the context, generate fake data and push it.
        // Note: You may want to remove this part in the production environment.
        feedData();
        fetchTransactions();
      } else {
        // Format the transactions from the context
        try {
          const formattedData = await formatTransactionList(transactions);
          setTransactionData(formattedData);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchAndFormatTransactions();
  }, [transactions]);

  console.log("trans", transactions);
  console.log("trans data:", transactionData);
  // const formattedTransaction = formatTransactionList(transactions);
  // console.log(formattedTransaction);
  const tabs = [
    {
      id: "list",
      label: "List",
      component: (
        <CustomTable transactions={transactionData} loading={loading} />
      ),
    },
    {
      id: "grid",
      label: "Grid",
      component: <TransactionGridView transactions={transactionData} />,
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
