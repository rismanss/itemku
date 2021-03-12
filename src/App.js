import { useState } from "react";
import { Layout, Header, Product } from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faCheckSquare,
  faHeart,
  faArrowLeft,
  faShoppingCart,
  faStar,
  faCogs,
  faPlus,
  faMinus,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "./Context";
import BottomSheet from "./components/Product/BottomSheet";
import UIConfig from "./components/UIConfig";

library.add(
  far,
  faCheckSquare,
  faHeart,
  faArrowLeft,
  faShoppingCart,
  faStar,
  faCogs,
  faPlus,
  faMinus,
  faTimesCircle
);

function App() {
  const [item, setItem] = useState(0);
  const [floatingMode, setFloatingMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Context.Provider
      value={{
        item,
        setItem,
        floatingMode,
        setFloatingMode,
        darkMode,
        setDarkMode,
      }}
    >
      <Layout>
        <Header />
        <Product />
        {floatingMode && <BottomSheet type="sticky" />}
        <UIConfig />
      </Layout>
    </Context.Provider>
  );
}

export default App;
