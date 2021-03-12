import { useContext } from "react";
import { Context } from "../../Context";
import Image from "./Image";
import Reviews from "./Reviews";
import Separator from "../Separator";
import Details from "./Details";
import BottomSheet from "./BottomSheet";

const Product = () => {
  const ctx = useContext(Context);
  const { floatingMode } = ctx;

  return (
    <div>
      <Image />
      <Details />
      <Separator />
      <Reviews />
      <Separator />
      {!floatingMode && <BottomSheet />}
    </div>
  );
};

export default Product;
