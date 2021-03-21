import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
// import { fireSignin, handleFirebaseGoogleSignIn } from "./LoginManger";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import firebaseConfig from "../Login/firebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  const googleProvider = new firebase.auth.GoogleAuthProvider();
const Signin = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const handleGoogleLogin = () => {
    firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const user = result.user;
      setLoggedInUser(user);
      history.replace(from);
    });
  };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const {email,password} = data;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    console.log('sin')
    var user = userCredential.user;
    return user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    return errorMessage;
  });
    setLoggedInUser(data);
    history.replace(from);
  };
  return (
    <div className='d-flex justify-content-center m-5'>
      <div className="col-md-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="form-control"
            ref={register({ required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <input
            className="form-control"
            name="password"
            type="password"
            placeholder="password"
            ref={register({ required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <input className="form-control mt-4 mb-2 btn-primary" type="submit" value='login' />
        </form>
        <p>
          Don't have an account? <Link to="/signup">Create an account</Link>{" "}
        </p>
        <button className='form-control btn-info ' onClick={handleGoogleLogin}>continue with google</button>
      </div>
      
    </div>
  );
};

export default Signin;
