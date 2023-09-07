import { useEffect, useState } from "react";
import {
  auth,
  signInWithGoogleRedirect,
  signInWithUserEmailAndPassword,
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.components";
import FormInput from "../../components/form-input/form-input.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss';

const Authentication = () => {
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

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button> */}
    </div>
  );
};

export default Authentication;
