import React, {useState} from 'react'
import { Tab, Tabs, Box } from '@mui/material';


function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

const CustomTabs = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
    <Tabs value={value} onChange={handleChange} aria-label="tabs">
      <Tab label="grid" />
      <Tab label="table"  />
    </Tabs>
  </Box>
)
}

export default CustomTabs