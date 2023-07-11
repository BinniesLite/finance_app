import React, {useState} from "react";
// components
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { IconButton, Tooltip } from "@mui/material";
import TransactionAdd from "../../general/TransactionAdd";

// icons
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
// logo

const NavButton = ({ title, icon }) => {
  return (
    <Tooltip title={title}>
      <IconButton>{icon}</IconButton>
    </Tooltip>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Stack
      className="nav-bar"
      mt={2}
      pr={{ xs: 1, md: 3 }}
      position="absolute"
      top={0}
      height={40}
      width="100%"
      direction="row"
      justifyContent="space-between"
    >
      <Stack px={4} pl={32} flexDirection="row" columnGap={2}>
      </Stack>
      <Stack
        flexDirection="row"
        alignItems="center"
        visibility={{ xs: "block", md: "block" }}
        columnGap={1}
      >
        <Button onClick={handleOpen} size="small" variant="outlined" sx={{ borderRadius: "10px" }}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            Add Transaction{" "}
          </Box>{" "}
          {" + "}
        </Button>
        <TransactionAdd open={open} handleClose={handleClose} />
        <NavButton
          title="Notifications"
          icon={<IoIosNotifications size="1.2rem" />}
        />
        <NavButton title="Profile" icon={<CgProfile size="1.2rem" />} />
      </Stack>
    </Stack>
  );
};

export default Navbar;
