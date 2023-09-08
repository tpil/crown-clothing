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

const initialErrors = {
  emailError: '',
  passwordError: ''
};

const SignInForm = () => {
  const [signinForm, setSigninForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const { email, password } = signinForm;

  console.log(signinForm, errors);

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
          setErrors({emailError: '', passwordError:'incorrect password for email'});
          break;
        case 'auth/user-not-found':
          setErrors({passwordError: '', emailError:'no user associated with this email'});
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
           sign in with
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
