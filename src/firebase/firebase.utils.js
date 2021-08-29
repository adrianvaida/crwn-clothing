import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const config = {
    apiKey: "AIzaSyBc88CJto_RzVqV7fdSxc8e0UtJ5Jebz5U",
    authDomain: "crwn-db-12908.firebaseapp.com",
    projectId: "crwn-db-12908",
    storageBucket: "crwn-db-12908.appspot.com",
    messagingSenderId: "345202595484",
    appId: "1:345202595484:web:b9e7b1941f7bef20c1ff59",
    measurementId: "G-GXK0F0WV5H"
  };

const firebase = initializeApp({...config});

export const auth = getAuth()
const database = getDatabase();

export { database }
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => 
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    // const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

export default firebase;