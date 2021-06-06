import React, { useState } from 'react';
import Modal from './modal';

const Block = ({ subtitle, text }) => {
  const [showModal, setShowModal] = useState(false); // Modalコンポーネントの表示の状態を定義する
  const ShowModal = () => {
    setShowModal(true);
  };

  return (
    <section>
      <div className="block_unit" >
        <img src={process.env.PUBLIC_URL + "/デザイン演習1_pic.jpg"} width="40%" height="50%" alt="asd" onClick={ShowModal} />
        <div className="block_subtitle" onClick={ShowModal}>
          <b>{subtitle}</b>
        </div>
      </div>
      <Modal showFlag={showModal} setShowModal={setShowModal} text={text} subtitle={subtitle} />
    </section>
  )
};

export default Block;