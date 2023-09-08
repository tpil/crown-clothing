import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation-bar.styles.scss";

const Navigation = () => {
  const { user, setUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setUser(null);
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
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT<span className="nav-link-border"></span>
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN<span className="nav-link-border"></span>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
