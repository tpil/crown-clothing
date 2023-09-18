import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase.utils";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation-bar.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { user } = useContext(UserContext);
  const { isCartOpen, setCartVisibility } = useContext(CartContext);

  const togglecart = () => {
    setCartVisibility(!isCartOpen);
  };
  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link className="nav-link" to="/">
            <CrownLogo className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP<span className="nav-link-border"></span>
          </Link>
          {user ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT<span className="nav-link-border"></span>
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN<span className="nav-link-border"></span>
            </Link>
          )}
          <span onClick={togglecart}><CartIcon  /></span>
        </div>
      </div>
      <div className="nav-dropdown">{isCartOpen && <CartDropDown />}</div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
