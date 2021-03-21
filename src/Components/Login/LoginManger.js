import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const fireSignin = (data) => {
  const {email,password} = data;
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    return user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    return errorMessage;
  });
}
export const handleFirebaseGoogleSignIn = () => {
   return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const user = result.user;
      return user;
    //   console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      console.log(errorMessage)
    });
};
