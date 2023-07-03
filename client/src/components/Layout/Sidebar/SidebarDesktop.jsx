import React, { useEffect } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { links } from "../../../constants/links";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { IconButton } from "@mui/material";
import { AiOutlineCaretRight } from "react-icons/ai";

const buckets = [
  {
    name: "Food",
    color: "#FDD652",
  },
  {
    name: "Transport",
    color: "blue",
  },
  {
    name: "Entertainment",
    color: "green",
  },
];

const Circle = ({ backgroundColor }) => {
  return (
    <span
      style={{
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: backgroundColor,
      }}
    />
  );
};

const Sidebar = ({ activePage, handleActivePage }) => {
  return (
    <Stack
      direction="column"
      rowGap={3}
      sx={{
        position: "fixed",
        width: "15rem",
        top: "0",
        color: "gray ",
        zIndex: "10",
        backgroundColor: "background.dark",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    >
      <Box height="1000vh">
        <Stack px={3} pt={2} flexDirection="column">
          <Typography className="orange-gradient" variant="h3">
            BLover
          </Typography>
        </Stack>
        <Divider color="gray" />
        <Stack py={3} px={2} flexDirection="column" rowGap={1}>
          {links.map((link, index) => (
            <button
              onClick={() => handleActivePage(link.name)}
              style={{
                display: "flex",
                alignItems: "center",
                background: `${activePage === link.name ? "black" : "none"}`,
                cursor: "pointer",
                padding: "none",
              }}
              key={index}
            >
              <IconButton color="white">{link.icon}</IconButton>
              <Typography
                cursor="pointer"
                color="subtitle.main"
                variant="h7"
                key={index}
                sx={{ mx: 1 }}
              >
                {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
              </Typography>
            </button>
          ))}
        </Stack>
        <Divider color="gray" />
        <Stack
          py={2}
          px={2}
          fontWeight="bold"
          justifyContent="center"
          flexDirection="column"
          rowGap={1}
        >
          <Typography color="background.default" fontWeight="600" variant="h5">
            Buckets
          </Typography>
          {buckets.map((bucket, index) => (
            <Stack
              key={index}
              
              justifyContent="space-between"
              flexDirection="row"
              alignItems="center"
              rowGap={1}
            >
              <button
                style={{
                  background: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "",
                  border: "none",
                }}
              >
                <Circle backgroundColor={bucket.color} />
                <Typography sx={{ ml: 1 }} color="subtitle.main" variant="h7">
                  {bucket.name}
                </Typography>
              </button>
              <IconButton>
                <AiOutlineCaretRight size="1rem" style={{ color: "#948B93" }} />
              </IconButton>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Sidebar;
