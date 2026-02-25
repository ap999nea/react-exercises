import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export const ProductList = () => {
  const { filteredProducts, setFilter } = useContext(ProductContext);

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Products</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {filteredProducts.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </div>
  );
};
