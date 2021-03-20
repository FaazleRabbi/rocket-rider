import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import { handleFirebaseGoogleSignIn } from "./LoginManger";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const handleGoogleLogin = () => {
    handleFirebaseGoogleSignIn().then((res) => {
      setLoggedInUser(res);
      history.replace(from);
    });
  };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => setLoggedInUser(data);
  return (
    <div>
      <div className='w-25'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="email"
            type="email"
            placeholder="email"
            className='form-control'
            ref={register({ required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <br/>
          <input
          className='form-control'
            name="password"
            type="password"
            ref={register({ required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <input className='form-control' type="submit" />
        </form>
      </div>
      <p>Don't have an account? <Link to='/signup'>Create an account</Link> </p>
      <button onClick={handleGoogleLogin}>continue with google</button>
    </div>
  );
};

export default Login;
