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
  type: "ADD_ITEM" | "REMOVE_ITEM";
  payload: Product;
};

const cartReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "ADD_ITEM": {
      return { products: [...state.products, action.payload] };
    }
    case "REMOVE_ITEM": {
      return {
        products: state.products.filter(
          (item) => item.id !== action.payload.id,
        ),
      };
    }
    default: {
      return state;
    }
  }
};

const CartContext = createContext<
  State & { totalPrice: number; dispatch: ActionDispatch<[action: Actions]> }
>({
  products: [],
  totalPrice: 0,
  dispatch: () => {},
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const totalPrice = state.products.reduce(
    (total, item) => total + item.price,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        products: state.products,
        totalPrice,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
