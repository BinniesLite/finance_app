import React from "react";

import avatar from "@/assets/Bunny.svg";

const BotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
        className="react-chatbot-kit-chat-bot-avatar-container"
        style={{ background: "none" }}
      >
        <img alt="BotAvatar" src={avatar} />
      </div>
    </div>
  );
};

export default BotAvatar;
