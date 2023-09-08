import "./button.styles.scss";
import { ReactComponent as GoogleLogo } from "../../assets/google-icon.svg";
const BUTTON_TYPES = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES[buttonType]}`}
      {...otherProps}
    >
      {children}
      <div className="google-logo"><GoogleLogo /></div>
    </button>
  );
};

export default Button;
