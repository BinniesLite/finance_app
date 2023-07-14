import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import {SiChatbot} from 'react-icons/si'


const Chat = () => {
  return (
    <Box sx={{position: "fixed", bottom: "5rem", right: "5rem", cursor: "pointer"}}>
        <Tooltip title="Chat bot">
          <Paper elevation={5}>
            <Box sx={{p:  1}}>
              <SiChatbot size="1.8rem"/>
            </Box>
          </Paper>
        </Tooltip>
    </Box>
  )
}

export default Chat