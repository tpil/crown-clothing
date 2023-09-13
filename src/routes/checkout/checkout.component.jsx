import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  const headerItems = ["product", "description", "quantity", "remove"];
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {headerItems.map((header, index) => (
          <div className="header-block" key={index}>{header}</div>
        ))}
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">{cartTotal}€</div>
    </div>
  );
};

export default Checkout;
