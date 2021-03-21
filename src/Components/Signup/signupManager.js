import firebase from "firebase/app";
import firebaseConfig from "../Login/firebaseConfig";
import "firebase/auth";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const fireEmailCreatingAccount = (data) => {
  

  //  console.log( 'data',data)
  const { email, password, displayName } = data;


  console.log("firebase update", email, password, displayName);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log("user", user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });

    //update
  var user = firebase.auth().currentUser;
  user
    .updateProfile({
      displayName: displayName,
    })
    .then(function () {
      // Update successful.
    })
    .catch(function (error) {
      // An error happened.
    });
};

export default fireEmailCreatingAccount;
