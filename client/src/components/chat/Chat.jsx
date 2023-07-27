import React from 'react'
// components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import {SiChatbot} from 'react-icons/si'
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';

import baseUrl from "@/api/baseUrl";
// chatbot
import Chatbot from 'react-chatbot-kit'
import config from './config'
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

// styles
import 'react-chatbot-kit/build/main.css';


const Chat = () => {
  
  const [toggleChat, setState] = React.useState(false)
  
  const handleToggleChat = () => {
    setState(!toggleChat)
  }
  
  const handleCloseChat = () => {
    setState(false)
  }

  const handleHotkey = (event) => {
    // Check if the hotkey combination is pressed: Ctrl + Alt + E (on Windows/Linux) or Cmd + Alt + E (on macOS)
    if ((event.ctrlKey || event.metaKey) &&  event.altKey && event.key === "a") {
      handleToggleChat();
    }
  };

  // Attach the event listener to the "keydown" event
  document.addEventListener("keydown", handleHotkey);



  return (
    <Box sx={{position: "fixed", bottom: "5rem", right: "5rem", cursor: "pointer", zIndex: '9999'}}>
        <Tooltip onClick={handleToggleChat}  title="Chatbot">
          <Paper elevation={5}>
            <Button variant="outlined" sx={{p:  1}}>
              <SiChatbot size="1.8rem"/>
            </Button>
          </Paper>
        </Tooltip>
        <Popover
          sx={{mt: 10}}
          open={toggleChat}
          onClose={handleCloseChat}
          anchorOrigin={{
            vertical: 'top', // Change 'top' to 'bottom'
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom', // Change 'bottom' to 'top'
            horizontal: 'left',
          }}
        >
          <Box sx={{}} >
            <Chatbot
             
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          </Box>
        </Popover>

        {/* {toggleChat &&  
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        } */}

    </Box>
  )
}

export default Chat