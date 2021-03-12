import Card from './Card';
import cx from 'classnames';
import Style from './style.module.css';

const Review = () => {
  return (
    <div className={Style.container}>
      <div className={cx(Style.title, 'font1')}>Ulasan Terakhir</div>
      <div className={cx(Style.overflow, 'font2')}>
        <Card name="Fikri" date="20 Maret 2020" text="Pengirimannya cepet banget" />
        <Card name="Jamal" date="28 Januari 2020" text="Mantap" />
        <Card name="Udin" date="16 Maret 2019" text="sip..." />
        <Card name="Joko" date="02 Januari 2020" text="Thanks" />
      </div>
    </div>
  );
};

export default Review;
