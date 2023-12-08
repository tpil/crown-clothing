import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deletFromCart, removeFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  //const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addItemHandler = () => {
    //addItemToCart(item);
    dispatch(addToCart(cartItems,item));
  };

  const removeItemHandler = () => {
    //removeItemFromCart(item);
    dispatch(removeFromCart(cartItems,item));
  };

  const deleteItemHandler = () => {
    //deleteItemFromCart(item);
    dispatch(deletFromCart(cartItems,item));
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
