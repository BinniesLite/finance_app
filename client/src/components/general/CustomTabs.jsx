import React from 'react';
import { Tabs, Tab } from '@mui/material';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CustomTabs = ({ value, handleChange }) => {
  const handleChangeTab = (event, newValue) => {
    handleChange(event, newValue);
  };

  return (
    <Tabs value={value} onChange={handleChangeTab} aria-label='tabs'>
      <Tab label='grid' value='grid' />
      <Tab label='table' value='table' />
    </Tabs>
  );
};

export default CustomTabs;
