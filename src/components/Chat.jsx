import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";

import { ChatHeaderCust } from "./ChatHeaderCust";
import { StandardMessageFormCust } from "./StandardMessageFormCust";

const Chat = () => {
  const projectId = import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID;
  const username = import.meta.env.VITE_CHAT_ENGINE_USERNAME;
  const secret = import.meta.env.VITE_CHAT_ENGINE_USER_SECRET;

  const chatProps = useMultiChatLogic(projectId, username, secret);

  return (
    <div className="Chat" style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <ChatHeaderCust chat={chat} />}
        // Check if i can set it without return
        renderMessageForm={(props) => {
          return (
            <StandardMessageFormCust
              props={props}
              activeChat={chatProps.chat}
            />
          );
        }}
      />
    </div>
  );
};

export { Chat };
