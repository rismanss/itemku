import { useContext } from "react";
import cx from 'classnames';
import { Context } from '../../../Context';
import Description from './Description';
import AddToCart from './AddToCart';
import Style from './style.module.css';

const BottomSheet = ({ type }) => {
  const ctx = useContext(Context);
  const { darkMode } = ctx;

  return (
    <div className={cx(type && Style.sticky, darkMode && Style.dark_mode)}>
      <Description />
      <AddToCart />
    </div>
  );
};

export default BottomSheet;