import firebase from "firebase/app";
import firebaseConfig from "../Login/firebaseConfig";
import "firebase/auth";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

 const fireEmailCreatingAccount = (data) => {
     console.log( 'data',data)
     const {email,password} = data;
    firebase.auth().createUserWithEmailAndPassword(email,password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log('user',user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}

export default fireEmailCreatingAccount;