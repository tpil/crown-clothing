import { Outlet } from "react-router-dom";
import { Fragment, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "../../store/user/user.selector";
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
  SignOut,
  NavLinkBorder,
  NavDropdown,
} from "./navigation-bar.styles";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const Navigation = () => {
  const dispatch = useDispatch();

  const user = useSelector(currentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  let cartDialogref = useRef();
  let cartIconRef = useRef();

  const togglecart = () => {
    dispatch(setIsCartOpen(!isCartOpen))
  };

  useEffect(() => {
    const closeCartWhenClickOutside = (event) => {
      if (
        isCartOpen &&
        !cartDialogref.current.contains(event.target) &&
        !cartIconRef.current.contains(event.target)
      ) {
        togglecart();
      }
    };
    document.addEventListener("mousedown", closeCartWhenClickOutside);

    return () =>
      document.removeEventListener("mousedown", closeCartWhenClickOutside);
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
              <SignOut>
                <span>{user.email}</span>
                <span>SIGN OUT</span>
              </SignOut>
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
        {isCartOpen && <CartDropDown />}
      </NavDropdown>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
