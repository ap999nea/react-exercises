import {
  type ActionDispatch,
  createContext,
  type PropsWithChildren,
  useReducer,
} from "react";
import type { Product } from "../types/product.type";

type State = {
  products: Product[];
};

const initialState: State = {
  products: [],
};

type Actions = {
  type:
    | "ADD_ITEM"
    | "REMOVE_ITEM"
    | "CLEAR_CART"
    | "INCREASE_QUANTITY"
    | "DECREASE_QUANTITY";
  payload: Product;
};

const cartReducer = (state: State, action: Actions): State => {
  const { products } = state;

  const existingItem = products.find((item) => item.id === action.payload.id);

  switch (action.type) {
    case "ADD_ITEM": {
      return existingItem
        ? {
            products: products.map((item) => ({
              ...item,
              quantity:
                item.id === action.payload.id
                  ? item.quantity + 1
                  : item.quantity,
            })),
          }
        : {
            products: [...products, { ...action.payload, quantity: 1 }],
          };
    }
    case "REMOVE_ITEM": {
      return {
        products: products.filter((item) => item.id !== action.payload.id),
      };
    }
    case "CLEAR_CART": {
      return {
        products: [],
      };
    }
    case "INCREASE_QUANTITY": {
      return {
        products: products.map((item) => ({
          ...item,
          quantity:
            item.id === action.payload.id ? item.quantity + 1 : item.quantity,
        })),
      };
    }
    case "DECREASE_QUANTITY": {
      return {
        products:
          existingItem?.quantity === 1
            ? products.filter((item) => item.id !== existingItem.id)
            : products.map((item) => ({
                ...item,
                quantity:
                  item.id === action.payload.id
                    ? item.quantity - 1
                    : item.quantity,
              })),
      };
    }
    default: {
      return state;
    }
  }
};

export const CartContext = createContext<
  State & { totalPrice: number; dispatch: ActionDispatch<[action: Actions]> }
>({
  products: [],
  totalPrice: 0,
  dispatch: () => {},
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [{ products }, dispatch] = useReducer(cartReducer, initialState);

  const totalPrice = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        products,
        totalPrice,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
