import { Outlet } from "react-router-dom";
import { Fragment, useContext, useRef, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase.utils";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation-bar.styles.jsx";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  NavLinkBorder,
  NavDropdown,
} from "./navigation-bar.styles";

const Navigation = () => {
  const { user } = useContext(UserContext);
  const { displayCart, setCartVisibility } = useContext(CartContext);

  let cartDialogref = useRef();
  let cartIconRef = useRef();

  const togglecart = () => {
    setCartVisibility(!displayCart);
  };
  
  useEffect(() => {
    const closeCartWhenClickOutside = (event) => {
      if (
        displayCart &&
        !cartDialogref.current.contains(event.target) &&
        !cartIconRef.current.contains(event.target)
      ) {
        togglecart();
      }
    };
    document.addEventListener("mousedown", closeCartWhenClickOutside);

    return () => document.removeEventListener("mousedown", closeCartWhenClickOutside);
  });

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer>
          <NavLink to="/">
            <CrownLogo className="logo" />
          </NavLink>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
            <NavLinkBorder />
          </NavLink>
          {user ? (
            <NavLink onClick={signOutUser}>
              SIGN OUT
              <NavLinkBorder />
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
              <NavLinkBorder />
            </NavLink>
          )}
          <span ref={cartIconRef} onClick={togglecart}>
            <CartIcon />
          </span>
        </NavLinks>
      </NavigationContainer>
      <NavDropdown ref={cartDialogref}>
        {displayCart && <CartDropDown />}
      </NavDropdown>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
