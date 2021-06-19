import { forwardRef } from "react";

const Card = forwardRef(
  ({ id, title, image, category, description, price, sizes, brand }, ref) => {
    return (
      <div className="product-card" ref={ref}>
        <div className="product-image">
          <img src={image} alt={title} />
          <svg
            className="like-heart"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 20 16"
          >
            <path
              d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
              fill="#a2a0a3"
              stroke="#FFF"
              fillRule="evenodd"
              opacity=".9"
            ></path>
          </svg>
        </div>
        <div className="product-details">
          <div className="category">{category}</div>
          <div>{title}</div>
          <div className="sizes-brand">
            <div>Sizes: {sizes.map((size) => `${size} `)}</div>
            <div>Brand {brand}</div>
          </div>
          <div className="price">{`$${price}`}</div>
        </div>
      </div>
    );
  }
);
export default Card;
