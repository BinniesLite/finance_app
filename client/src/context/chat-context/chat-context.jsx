import {createContext, useContext, useState} from 'react';

const ChatContext = createContext();

export const ChatProvider = ({children}) => {
    const [toggleChat, setToggleChat] = useState(false);


    return (
        <ChatContext.Provider value={{toggleChat, setToggleChat}}>
            {children}
        </ChatContext.Provider>
    );
}

const useChat = () => useContext(ChatContext);

export {useChat};
export default ChatProvider;