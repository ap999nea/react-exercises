import { Minus, Plus } from "lucide-react";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CartContext } from "../contexts/CartContext";
import type { Product } from "../types/product.type";
import { getProductPrice } from "../utils/get-product-price";

type Props = {
  product: Product;
};

export const CartItem = ({ product }: Props) => {
  const { dispatch } = useContext(CartContext);

  const increaseQuantity = () => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: product,
    });
  };

  const decreaseQuantity = () => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: product,
    });
  };

  const price = getProductPrice(product.price, product.quantity);

  return (
    <Card className="flex flex-col lg:flex-row gap-4 justify-between items-center">
      <p className="text-xl font-semibold">{product.name}</p>
      <div className="flex flex-col lg:flex-row items-center gap-2">
        <div className="flex gap-4 items-center">
          <Button onClick={decreaseQuantity}>
            <Minus />
          </Button>
          <p className="font-semibold">{product.quantity}</p>
          <Button onClick={increaseQuantity}>
            <Plus />
          </Button>
        </div>
        <p className="text-xl">Price: {price}</p>
      </div>
    </Card>
  );
};
