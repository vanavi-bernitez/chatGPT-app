import React, { useState } from "react";

import { MessageFormUI } from "./MessageFormUI";
import { generateDate } from "../helpers/generateDate.js";
import { usePostAiAssistMutation } from "../../state/api.js";

//TODO: create logic for autocomplete text

const AiCode = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [preview, setPreview] = useState("");
  const [triggerAssist, resultAssist] = usePostAiAssistMutation();

  const handleOnLoad = () => {
    URL.revokeObjectURL(preview);
  };

  const handleOnClick = () => {
    setPreview("");
    setAttachment("");
  };

  const handleOnChange = (event) => {
    setMessage(event.target.value);
  };

  const handleOnDrop = (acceptedFiles) => {
    setAttachment(acceptedFiles[0]);
    setPreview(URL.createObjectURL(acceptedFiles[0]));
  };

  const handleSubmit = () => {
    // const attachments = attachment
    //   ? [{ blob: attachment, file: attachment.name }]
    //   : [];
    // const form = {
    //   attachments,
    //   created: generateDate(),
    //   sender_username: props.username,
    //   text: message,
    //   activeChatId: activeChat.id,
    // };
    // props.onSubmit(form);
    // triggerCode(form);
    // setMessage("");
    // setAttachment("");
    // setPreview("");
  };

  return (
    <MessageFormUI
      handleOnLoad={handleOnLoad}
      handleOnClick={handleOnClick}
      handleOnChange={handleOnChange}
      handleOnDrop={handleOnDrop}
      handleSubmit={handleSubmit}
      message={message}
      preview={preview}
    />
  );
};

export { AiCode };
