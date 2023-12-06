import { useContext } from "react";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <CartIconContainer>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
