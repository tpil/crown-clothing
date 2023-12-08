import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { useSelector } from "react-redux";
import { selectCartCounter } from "../../store/cart/cart.selector";

const CartIcon = () => {
  const cartCount = useSelector(selectCartCounter);
  
  return (
    <CartIconContainer>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
