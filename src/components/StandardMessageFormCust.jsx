import React, { useState } from "react";
import {
  PaperAirplaneIcon,
  PaperClipIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Dropzone from "react-dropzone";

const StandardMessageFormCust = ({ props, activeChat }) => {
  console.log(props);
  console.log(activeChat);
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

  const handleSubmit = () => {};

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
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            noClick={true}
            onDrop={handleOnDrop}
          >
            {({ getRootProps, getInputProps, open }) => {
              return (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <PaperClipIcon
                    className="message-form-icon-clip"
                    onClick={open}
                  />
                </div>
              );
            }}
          </Dropzone>
          <hr className="vertical-line" />
          <PaperAirplaneIcon
            className="message-form-icon-airplane"
            onClick={() => {
              setPreview("");
              // handleSubmit()
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { StandardMessageFormCust };
