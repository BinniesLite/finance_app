import React from "react";
import { Box, Tabs, Tab } from "@mui/material";

const CustomTabs = ({ tabs, activeTab, handleChangeTab }) => {
  return (
    <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
      <Tabs value={activeTab} onChange={handleChangeTab} aria-label="tabs">
        {tabs?.map((tab, index) => {
          return <Tab key={index} label={tab.label} />;
        })}
      </Tabs>
    </Box>
  );
};

export default CustomTabs;
