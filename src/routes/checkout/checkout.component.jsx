import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const headerItems = ["product", "description", "quantity", "remove"];
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {headerItems.map((header, index) => (
          <HeaderBlock key={index}>{header}</HeaderBlock>
        ))}
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total>{cartTotal}€</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
