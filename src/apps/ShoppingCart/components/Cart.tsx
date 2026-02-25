import { ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Modal } from "@/shared/components/Modal";
import { CartContext } from "../contexts/CartContext";
import type { Product } from "../types/product.type";
import { getProductPrice } from "../utils/get-product-price";
import { CartItem } from "./CartItem";
import { CheckoutForm } from "./CheckoutForm";

export const Cart = () => {
  const { products, totalPrice, dispatch } = useContext(CartContext);
  const [modalOpen, setModalOpen] = useState(false);

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
      payload: {} as Product,
    });
  };

  const handleSubmitCart = () => {
    clearCart();
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:items-center">
          <h3 className="text-2xl font-semibold">Cart</h3>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <Button onClick={clearCart} disabled={!products.length}>
              Clear cart
            </Button>
            <Button
              onClick={() => setModalOpen(!modalOpen)}
              disabled={!products.length}
            >
              <ShoppingCart />
              Checkout
            </Button>
          </div>
        </div>
        {!products.length && <h4 className="text-xl">No products yet...</h4>}
        <ul className="flex flex-col gap-4">
          {products.map((product) => (
            <li key={`product-${product.id}`}>
              <CartItem product={product} />
            </li>
          ))}
        </ul>
        {!!totalPrice && (
          <p className="text-2xl">Total price: {getProductPrice(totalPrice)}</p>
        )}
      </div>
      {createPortal(
        <Modal
          title="Shopping cart checkout"
          isModalOpen={modalOpen}
          setModalOpen={() => setModalOpen(!modalOpen)}
        >
          <CheckoutForm submitAction={handleSubmitCart} />
        </Modal>,
        document.getElementById("root")!,
      )}
    </>
  );
};
