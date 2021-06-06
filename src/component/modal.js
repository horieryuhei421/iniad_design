import React from "react";

const Modal = (props) => {
  const closeModal = () => {
    props.setShowModal(false);
  };
  return (
    <>
      {props.showFlag ? (
        <div className="modal">
          <div className="overlay">
            <div className="modal_content">
              <h2>{props.subtitle}</h2>
              <p>{props.text}</p>
              <button onClick={closeModal}>閉じる</button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;