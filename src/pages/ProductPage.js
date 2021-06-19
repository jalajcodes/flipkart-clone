import { useState } from "react";
import FilterPanel from "../components/FilterPanel";
import ProductList from "../components/ProductList";
import data from "../data.json";

const ProductPage = () => {
  const [products, setProducts] = useState(data);

  return (
    <div className="product-page">
      <FilterPanel products={products} setProducts={setProducts} />
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};

export default ProductPage;
