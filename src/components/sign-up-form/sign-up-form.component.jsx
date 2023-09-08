import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.components";

const initialForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialErrors = {
  confirmPasswordError: "",
};

const SignUpForm = () => {
  const [signUpForm, setSignUpform] = useState(initialForm);
  const [errors, setErrors] = useState(initialForm);
  const { name, email, password, confirmPassword } = signUpForm;

  const resetFormFields = () => {
    setSignUpform(initialForm);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "passwords do not match" });
      return;
    }
    try {
      console.log("it matches");
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (response) {
        await createUserDocFromAuth(response.user, { displayName: name });
        resetFormFields();
        setErrors(initialErrors);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpform({ ...signUpForm, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "name",
            value: name,
          }}
        />
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            minLength: "6",
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            required: true,
            minLength: "6",
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
          error={errors.confirmPassword}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
