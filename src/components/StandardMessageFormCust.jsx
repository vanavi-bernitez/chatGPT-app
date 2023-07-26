import React, { useState } from "react";

import { MessageFormUI } from "./MessageFormUI";

const StandardMessageFormCust = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [preview, setPreview] = useState("");

  const handleOnLoad = () => {
    URL.revokeObjectURL(preview); //let the browser know not to keep the reference to the file any longer.
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
    setPreview(URL.createObjectURL(acceptedFiles[0])); //URL that reference the contents of the specified source
  };

  const handleSubmit = () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);

    const attachments = attachment
      ? [{ blob: attachment, file: attachment.name }]
      : [];

    const form = {
      attachments,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id,
    };

    props.onSubmit(form);

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

export { StandardMessageFormCust };
