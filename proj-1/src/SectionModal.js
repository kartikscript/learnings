import React, { useRef } from "react";

export default function SectionModal({
  title,
  icon,
  desc,
  closeModal,
  showModal,
}) {
  function invokeClick() {
    closeModal();
  }

  return (
    <>
      <div className="section-modal">
        <div className="modal-nav">
          <img className="modal-img" src={require(`${icon}`)} alt="" />
          <h2 className="modal-title">{title}</h2>

          <button onClick={invokeClick} className="modal-btn btn">
            X
          </button>
        </div>
        <p className="modal-info">{desc}</p>
      </div>
    </>
  );
}
