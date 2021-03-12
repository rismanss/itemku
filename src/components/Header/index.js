import { useContext, useEffect, useState } from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./style.module.css";
import { Context } from "../../Context";

const Header = () => {
  const ctx = useContext(Context);
  const [shake, setShake] = useState(false);
  const { item } = ctx;

  useEffect(() => {
    setShake(true);
    let timeShake = setTimeout(() => setShake(false), 200);

    return () => {
      clearTimeout(timeShake);
    };
  }, [item]);

  return (
    <div className={Style.header}>
      <div
        onClick={() =>
          alert(
            "This function is not yet available for this test purpose only. Coming soon yah.."
          )
        }
        className={Style.navLeft}
      >
        <FontAwesomeIcon
          style={{ fontSize: "1rem" }}
          icon={["fas", "arrow-left"]}
          color="white"
        />
      </div>
      <div className={cx(Style.navRight, shake && Style.shake)}>
        <FontAwesomeIcon
          style={{ fontSize: "1rem" }}
          icon={["fas", "shopping-cart"]}
          color="white"
        />
        {item > 0 && <span className={Style.numberCart}>{item}</span>}
      </div>
    </div>
  );
};

export default Header;
