import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";

import { ChatHeaderCust } from "./ChatHeaderCust";
import { StandardMessageFormCust } from "./StandardMessageFormCust";
import { AiText } from "./AiText.jsx";
import { AiCode } from "./AiCode.jsx";

const Chat = ({ user, secret }) => {
  const projectId = import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID;
  const username = import.meta.env.VITE_CHAT_ENGINE_USERNAME; //TODO: change to users input
  const secret = import.meta.env.VITE_CHAT_ENGINE_USER_SECRET; //TODO: change to users input

  const chatProps = useMultiChatLogic(projectId, username, secret);

  return (
    <div className="Chat" style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <ChatHeaderCust chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("AiChat_")) {
            return <AiText props={props} activeChat={chatProps.chat} />;
          } else if (chatProps.chat?.title.startsWith("AiCode_")) {
            return <AiCode props={props} activeChat={chatProps.chat} />;
          } else {
            return (
              <StandardMessageFormCust
                props={props}
                activeChat={chatProps.chat}
              />
            );
          }
        }}
      />
    </div>
  );
};

export { Chat };
