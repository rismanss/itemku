import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import { Context } from "../../Context";
import Style from "./style.module.css";

const UIConfig = () => {
  const [show, setShow] = useState(false);
  const ctx = useContext(Context);
  const { floatingMode, setFloatingMode, darkMode, setDarkMode } = ctx;

  const renderIcon = () => {
    if (show) {
      return (
        <FontAwesomeIcon
          onClick={() => setShow(!show)}
          icon={["fas", "times-circle"]}
          color="white"
        />
      );
    }

    return (
      <FontAwesomeIcon
        onClick={() => setShow(!show)}
        icon={["fas", "cogs"]}
        color="white"
      />
    );
  };
  return (
    <div className={cx(Style.left_panel, show && Style.show)}>
      <div className={Style.icon}>{renderIcon()}</div>
      {show && (
        <div className={Style.content}>
          <label className={Style.container}>
            Dark Mode
            <input
              className={Style.regular_checkbox}
              type="checkbox"
              defaultChecked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            ></input>
            <span className={Style.checkmark}></span>
          </label>
          <label className={Style.container}>
            Floating Footer
            <input
              className={Style.regular_checkbox}
              type="checkbox"
              defaultChecked={floatingMode}
              onChange={() => setFloatingMode(!floatingMode)}
            ></input>
            <span className={Style.checkmark}></span>
          </label>
        </div>
      )}
    </div>
  );
};

export default UIConfig;
