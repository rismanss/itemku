import { useState } from 'react';
import productImg from '../../../assets/hero-abc.jpg';
import Style from './style.module.css';

const Image = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={Style.container}>
      <img className={Style.img} src={productImg} alt="hero" onClick={() => setOpenModal(true)} />
      {openModal && (
        <div className={Style.modal}>
          <div className={Style.modalBox}>
            <span className={Style.close} onClick={() => setOpenModal(false)}>&times;</span>
            <div className={Style.content}>
              <img className={Style.imgModal} src={productImg} alt="heroModal" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Image;
