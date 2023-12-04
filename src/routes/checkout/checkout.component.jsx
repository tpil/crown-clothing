import { useContext } from "react";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

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
