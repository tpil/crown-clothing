import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.components";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addtoCart = () => {addItemToCart(product)};

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addtoCart}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
