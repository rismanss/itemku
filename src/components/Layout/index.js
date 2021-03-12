import { useContext } from "react";
import Style from "./style.module.css";
import cx from "classnames";
import { Context } from "../../Context";

const Layout = (props) => {
  const ctx = useContext(Context);
  const { darkMode } = ctx;

  return (
    <div className={Style.layout}>
      <div className={cx(Style.container, darkMode && Style.dark_mode)}>{props.children}</div>
    </div>
  );
};

export default Layout;
