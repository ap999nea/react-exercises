import { useContext } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CartContext } from "../contexts/CartContext";
import type { Product } from "../types/product.type";
import { getProductPrice } from "../utils/get-product-price";

type Props = {
  product: Product;
};

export const ProductItem = ({ product }: Props) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: product,
    });
    toast.success("Product added to cart", { position: "top-right" });
  };

  return (
    <Card className="flex flex-col gap-2">
      <img
        className="h-72 object-contain"
        src={product.image}
        alt={product.name}
      />
      <p className="font-semibold">{product.name}</p>
      <Button onClick={addToCart}>Add to cart</Button>
      <p className="font-semibold">Price: {getProductPrice(product.price)}</p>
    </Card>
  );
};
