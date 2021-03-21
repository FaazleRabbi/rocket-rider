import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useHistory,
  useLocation
} from "react-router-dom";
import { userContext } from "../../App";
import { fireSignin, handleFirebaseGoogleSignIn } from "./LoginManger";
import { useForm } from "react-hook-form";

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

  const [loginError, setLoginError] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    fireSignin(data).then((res) => {
      if (res.email) {
        setLoggedInUser(data);
        history.replace(from);
        setLoginError("");
      } else {
        setLoginError(res);
      }
    });
  };
  return (
    <div className="d-flex justify-content-center m-5">
      <div className="col-md-6">
        <h6 className="text-danger">{loginError}</h6>
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

          <input
            className="form-control mt-4 mb-2 btn-primary"
            type="submit"
            value="login"
          />
        </form>
        <p>
          Don't have an account? <Link to="/signup">Create an account</Link>{" "}
        </p>
        <button className="form-control btn-info " onClick={handleGoogleLogin}>
          continue with google
        </button>
      </div>
    </div>
  );
};

export default Login;
