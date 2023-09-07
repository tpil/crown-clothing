import { useState } from "react";
import {
  signInWithUserEmailAndPassword,
  createUserDocFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.components";

const initialForm = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [signinForm, setSigninForm] = useState(initialForm);
  const { email, password } = signinForm;

  console.log(signinForm);

  const resetFormFields = () => {
    setSigninForm(initialForm);
  };

  const signinWithEmail = async (event) => {
    console.log('sign with email');
    event.preventDefault();
    try {
      const res = await signInWithUserEmailAndPassword(email, password);
      if (res) resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(err);
      }
    }
  };

  const signinWithGoogle = async () => {
    
    const response = await signInWithGooglePopup();
    console.log(response);
    await createUserDocFromAuth(response.user);
    if (response) resetFormFields();
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
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signinWithGoogle}>
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
