//import "./button.styles.scss";
//import { ReactComponent as GoogleLogo } from "../../assets/google-icon.svg";
import {
  BaseBtn,
  InvertedBtn,
  GoogleSignInBtn,
  GoogleLogoContainer,
  Logo,
} from "./button";


export const BUTTON_TYPES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

//declare onbject and get btn component
const getButtonType = (type = BUTTON_TYPES.base) =>
  ({
    [BUTTON_TYPES.base]: BaseBtn,
    [BUTTON_TYPES.google]: GoogleSignInBtn,
    [BUTTON_TYPES.inverted]: InvertedBtn,
  }[type]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomComponent = getButtonType(buttonType);

  return (
    <CustomComponent {...otherProps}>
      {children}
      {buttonType === BUTTON_TYPES.google && (
        <GoogleLogoContainer>
          <Logo />
        </GoogleLogoContainer>
      )}
    </CustomComponent>
  );
};
// const BUTTON_TYPES = {
//   google: "google-sign-in",
//   inverted: "inverted",
// };

// const Button = ({ children, buttonType, ...otherProps }) => {
//   return (
//     <button
//       className={`button-container ${BUTTON_TYPES[buttonType]}`}
//       {...otherProps}
//     >
//       {children}
//       {buttonType === "google" ? (
//         <div className="google-logo">
//           <GoogleLogo />
//         </div>
//       ) : (
//         ""
//       )}
//     </button>
//   );
// };

export default Button;
