import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation-bar.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link className="nav-link" to="/">
            <CrownLogo className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">SHOP<span className="nav-link-border"></span></Link>
          <Link className="nav-link" to="/auth">SIGN IN<span className="nav-link-border"></span></Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
