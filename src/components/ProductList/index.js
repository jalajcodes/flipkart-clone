import FlipMove from "react-flip-move";
import Card from "./Card";
import "./productlist.css";

const ProductList = ({ products }) => {
  console.log("render");
  return (
    <div className="product-list">
      <div className="header">
        <h4>Clothing and Accessories</h4>
        <span>(Showing 1 – 40 products of 1,00,302 products)</span>
      </div>
      <FlipMove className="products">
        {products?.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            sizes={product.size}
            brand={product.brand}
            image={product.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default ProductList;
