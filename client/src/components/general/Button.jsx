import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({title}) => {
  return (
    <Button
      variant="contained"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: "black",
        background: "#ffd600",
        borderRadius: '10%',
        '&:hover': {
            background: "#ffd600",
        },
        border: "0.5px solid black"
      }}
    >
      {title}
      
    </Button>
  );
};

export default CustomButton;