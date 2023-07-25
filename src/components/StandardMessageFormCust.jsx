import React, { useState } from "react";
import {
  PaperAirplaneIcon,
  PaperClipIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Dropzone from "react-dropzone";

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
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img
            src={preview}
            alt="message-form-preview"
            className="message-form-preview-image"
            onLoad={handleOnLoad}
          />
          <XMarkIcon className="message-form-icon-x" onClick={handleOnClick} />
        </div>
      )}
      <div className="message-form">
        <div className="message-form-input-container">
          <input
            className="message-form-input"
            type="text"
            value={message}
            onChange={handleOnChange}
            placeholder="Send a message ..."
          />
        </div>
        <div className="message-form-icons">
          <Dropzone
            accept={{ "image/*": [".jpeg", ".jpg"] }}
            multiple={false}
            noClick={true}
            onDrop={handleOnDrop}
          >
            {({ getRootProps, getInputProps, open }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <PaperClipIcon
                  className="message-form-icon-clip"
                  onClick={open}
                />
              </div>
            )}
          </Dropzone>
          <hr className="vertical-line" />
          <PaperAirplaneIcon
            className="message-form-icon-airplane"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export { StandardMessageFormCust };
