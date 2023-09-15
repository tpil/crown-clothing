import { useState } from "react";
import {
  signInWithUserEmailAndPassword,
  signInWithGooglePopup
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.components";

const initialForm = {
  email: "",
  password: "",
};

const initialErrors = {
  emailError: "",
  passwordError: "",
};

const SignInForm = () => {

  const [signinForm, setSigninForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const { email, password } = signinForm;

  //signin with redirect methodz
  // useEffect(() => {
  //   const fechRedirectResult = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDok = await createUserDocFromAuth(response.user);
  //     }
  //   };
  //   fechRedirectResult();
  // }, []);


  const resetFormFields = () => {
    setSigninForm(initialForm);
  };

  const signinWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    if (response) resetFormFields();
  };

  const signinWithEmail = async (event) => {
    console.log("sign with email");
    event.preventDefault();
    try {
      const res = await signInWithUserEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          setErrors({
            emailError: "",
            passwordError: "incorrect password for email",
          });
          break;
        case "auth/user-not-found":
          setErrors({
            passwordError: "",
            emailError: "no user associated with this email",
          });
          break;
        default:
          console.log(err);
      }
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setSigninForm({ ...signinForm, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={signinWithEmail}>
        <FormInput
          label="email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
          error={errors.emailError}
        />
        <FormInput
          label="password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
          error={errors.passwordError}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signinWithGoogle}>
            continue with
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
