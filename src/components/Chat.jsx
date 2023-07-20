import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import { ChatHeaderCustom } from "./ChatHeaderCustom";

const Chat = () => {
  const projectId = import.meta.env.CHAT_ENGINE_PROJECT_ID;
  const username = "testUser1";
  const secret = import.meta.env.CHAT_ENGINE_USER_SECRET;

  const chatProps = useMultiChatLogic(projectId, username, secret);

  return (
    <div className="Chat" style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <ChatHeaderCustom chat={chat} />}
      />
    </div>
  );
};

export { Chat };
