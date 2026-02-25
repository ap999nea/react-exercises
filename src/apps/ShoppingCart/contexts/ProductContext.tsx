import { createContext, type PropsWithChildren, useState } from "react";
import { v4 as uuid } from "uuid";
import type { Product } from "../types/product.type";

type ProductProviderState = {
  filteredProducts: Product[];
  setFilter: (filter: string) => void;
};

const initialState = {
  filteredProducts: [],
  setFilter: () => {},
};

export const ProductContext = createContext<ProductProviderState>(initialState);

const mockProducts: Product[] = [
  {
    id: uuid(),
    name: "Laptop",
    price: 1000,
    category: "tech",
    image: "laptop.png",
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Phone",
    price: 600,
    category: "tech",
    image: "phone.jpg",
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Washing Machine",
    price: 400,
    category: "home",
    image: "washing.avif",
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Refrigerator",
    price: 700,
    category: "home",
    image: "refrigerator.jpg",
    quantity: 0,
  },
  {
    id: uuid(),
    name: "T-Shirt",
    price: 20,
    category: "clothing",
    image: "shirt.jpg",
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Chihuahua Dog",
    price: 1000,
    category: "animals",
    image: "chihuahua.jpg",
    quantity: 0,
  },
];

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [products] = useState(mockProducts);
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <ProductContext.Provider value={{ filteredProducts, setFilter }}>
      {children}
    </ProductContext.Provider>
  );
};
