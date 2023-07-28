import { React } from 'react';

import { Grid } from '@mui/material';
import Item from '@mui/material/ListItem';
import TransactionCard from '../TransactionCard/TransactionCard';
import Section from '@/components/layout/Section/Section';
import './TransactionGridView.css';

const TransactionGridView = ({ transactions }) => {
  
  return (
    <Section>
      {transactions && (
        <div className='transaction-container'>
          <Grid container justify='space-around' spacing={2}>
            <Item>
              <Grid
                container
                spacing={{ xs: 2, md: 8 }}
                columns={{ xs: 3, sm: 8, md: 12 }}
              >
                {Object.values(transactions).map((transaction) => (
                  <Grid
                    item
                    xs={2}
                    sm={3}
                    md={4}
                    key={transaction.id}
                    paddingBottom={3}
                  >
                    <Item>
                      <TransactionCard
                        name={transaction.walletName}
                        amount={transaction.amount}
                        date={transaction.createdAt}
                        type={transaction.type}
                        image={transaction.image ? transaction.image : "https://firebasestorage.googleapis.com/v0/b/bunny-lovers-d8ce3.appspot.com/o/%E2%80%94Pngtree%E2%80%94vector%20receipt%20icon_4192327.png?alt=media&token=b5aeec93-3f0f-409d-9209-cf57746489a8"}
                      />
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Item>
          </Grid>
        </div>
      )}
    </Section>
  );
};

export default TransactionGridView;
