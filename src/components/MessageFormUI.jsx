import React, { useState } from "react";
import {
  PaperAirplaneIcon,
  PaperClipIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Dropzone from "react-dropzone";

const MessageFormUI = ({
  handleOnLoad,
  handleOnClick,
  handleOnChange,
  handleOnDrop,
  handleSubmit,
  message,
  preview,
}) => {
  //   const [preview, setPreview] = useState("");
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

export { MessageFormUI };
