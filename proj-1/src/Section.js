import React, { useState } from "react";
import SectionModal from "./SectionModal";

export default function Section({ title, src, icon, desc }) {
  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="box" onClick={openModal}>
        <div className="box-text">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <img src={require(`./images/${src}.jpg`)} alt={title} />
      </div>

      {showModal && (<>
        <SectionModal
          title={title}
          icon={icon}
          desc={desc}
          closeModal={closeModal}
          showModal={showModal}
        />
        <div onClick={closeModal} className="overlay"></div>
        </>
      )}
      {/* {showModal && <div onClick={closeModal} className="overlay"></div>} */}
    </>
  );
}
