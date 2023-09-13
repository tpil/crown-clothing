import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";
const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);

  const addItemHandler = () => {
    addItemToCart(item);
  };

  const removeItemHandler = () => {
    removeItemFromCart(item);
  };

  const deleteItemHandler = () => {
    deleteItemFromCart(item);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
       <span className={`arrow ${quantity===1 ? 'disabled':'' }`} onClick={removeItemHandler}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={addItemHandler}>
          &#10095;
        </span>
      </div>
      <span className="price">{price}€</span>
      <span className="remove-button" onClick={deleteItemHandler}> &#10005;</span>
    </div>
  );
};

export default CheckoutItem;
