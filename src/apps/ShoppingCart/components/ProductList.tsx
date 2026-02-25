import { useContext } from "react";
import { v4 as uuid } from "uuid";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductContext } from "../contexts/ProductContext";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const { filteredProducts, setFilter } = useContext(ProductContext);
  const filters = ["all", "tech", "home", "clothing", "animals"];

  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-2xl font-semibold">Products</h3>
      <Select onValueChange={(value) => setFilter(value)}>
        <SelectTrigger className="w-full lg:w-[60%]">
          <SelectValue placeholder="Filters" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((filter) => (
              <SelectItem
                key={`filter-${uuid()}`}
                value={filter}
                className="capitalize"
              >
                {filter}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
