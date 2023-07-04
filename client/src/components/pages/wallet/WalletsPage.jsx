import { useEffect, useState } from 'react';
// component
import Stack from '@mui/material/Stack';
import CustomTabs from '../../general/CustomTabs';
import CustomTable from '../../general/table/CustomTable';
// css
import './WalletsPage.css';
// layout
import Section from '../../Layout/Section/Section';
// api 
import { getTransactions } from "../../../utils/http-request";

const WalletsPage = () => {
  const [view, setView] = useState("grid");
  
  const generateFakeData = (numberOfData) => {
    const fakeData = [];
    for (let i = 1; i <= numberOfData; i++) {
      fakeData.push({
        id: i,
        name: `Wallet ${i}`,
        amount: Math.floor(Math.random() * 1000) + 1,
      });
    }



    return fakeData;
  };

  const handleChangeView = (event, newValue) => {
    console.log(newValue);
    setView(newValue);
  };


  
  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await getTransactions();
      console.log(transactions);
    } 

    fetchTransactions();
  }, []);



  return (
    <Section title={"Wallets"}>
        <Stack direction={{xs: "column", md: "row", width: "100%"}} columnGap={3}>
          <Stack flexDirection="column" width="100%" ml={2}>
            <CustomTabs handleChange={handleChangeView} />
          </Stack>
        </Stack>
    </Section>
  );
};

export default WalletsPage;
