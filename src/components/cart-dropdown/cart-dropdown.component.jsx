import Button from "../button/button.components";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate();
  const checkOutHandler = () => {
    navigate("./checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={checkOutHandler}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
