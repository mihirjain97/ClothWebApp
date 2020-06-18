import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAdwtNrpX6gcOTnOBr4PYLMMu92SsAPu1Y",
  authDomain: "clothwebapp-db.firebaseapp.com",
  databaseURL: "https://clothwebapp-db.firebaseio.com",
  projectId: "clothwebapp-db",
  storageBucket: "clothwebapp-db.appspot.com",
  messagingSenderId: "264748771691",
  appId: "1:264748771691:web:a4fd08942fedb49c89042e",
  measurementId: "G-6GF3L9Z08M",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
