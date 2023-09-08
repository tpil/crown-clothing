// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkBmw_uH2DtNAzHFMpSxTSt5la4DspcHs",
  authDomain: "crown-db-3f23c.firebaseapp.com",
  projectId: "crown-db-3f23c",
  storageBucket: "crown-db-3f23c.appspot.com",
  messagingSenderId: "872813877435",
  appId: "1:872813877435:web:34edee3b6458697e46319e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const signInWithUserEmailAndPassword = async (email, password) => {
 if (!email || !password) return;
 return await signInWithEmailAndPassword(auth, email, password);
}

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalParams) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  //get doc if exists
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot, userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalParams
      });
    } catch (err) {
      console.log('error while creating new user', err.message);
    }

    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}
