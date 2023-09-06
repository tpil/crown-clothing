import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
        const userDocRef = await createUserDocFromAuth(response.user);
    }
    return(
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
    );
};

export default SignIn;