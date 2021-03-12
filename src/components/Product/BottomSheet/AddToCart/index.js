import { useContext } from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "../../../../Context";
import Style from "./style.module.css";

const AddToCart = () => {
  const ctx = useContext(Context);
  const { item, setItem } = ctx;

  const renderButton = () => {
    if (item > 0) {
      return (
        <div className={Style.has_cart}>
          <button
            className={cx(Style.btn_has_cart, Style.btn_has_cart_minus)
            }
            onClick={() => setItem(item - 1)}
          >
            <FontAwesomeIcon icon={["fas", "minus"]} color="black" />
          </button>
          <div className={Style.item}>{item}</div>
          <button
            className={cx(Style.btn_has_cart, "font1")}
            onClick={() => setItem(item + 1)}
          >
            <FontAwesomeIcon icon={["fas", "plus"]} color="white" />
          </button>
        </div>
      );
    }

    return (
      <button
        className={cx(Style.customButton, "font1")}
        onClick={() => setItem(item + 1)}
      >
        Tambahkan Ke Troli
      </button>
    );
  };

  return <div className={Style.container}>{renderButton()}</div>;
};

export default AddToCart;
