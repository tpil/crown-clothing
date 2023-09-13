import { useContext } from "react";
import "./cart-icon.styles.scss"
import { ReactComponent as  ShoppingBagIcon} from "../../assets/shopping-bag.svg";
import {CartContext} from "../../contexts/cart.context";

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <div className="cart-icon-container">
    <ShoppingBagIcon className="shopping-icon"/>
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;