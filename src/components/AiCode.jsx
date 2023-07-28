import React, { useState } from "react";

import { MessageFormUI } from "./MessageFormUI";
import { generateDate } from "../helpers/generateDate.js";
import { usePostAiCodeMutation } from "../../state/api.js";

const AiCode = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [preview, setPreview] = useState("");
  const [triggerCode] = usePostAiCodeMutation();

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
    const attachments = attachment
      ? [{ blob: attachment, file: attachment.name }]
      : [];

    const form = {
      attachments,
      created: generateDate(),
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id,
    };

    props.onSubmit(form);
    triggerCode(form);

    setMessage("");
    setAttachment("");
    setPreview("");
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
