import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Section = ({ children, title }) => {
  return (
    <Box sx={{ mt: 8, width: "100%", pl: 29}}>
      <Stack flexDirection="column" rowGap={3} >
      <Typography sx={{ml: 3, mt: 2}} className="" variant="h4">
        {title}      
      </Typography>
      {children}
      </Stack>
    </Box>
  );
};

export default Section;
