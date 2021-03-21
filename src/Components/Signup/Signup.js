import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import fireEmailCreatingAccount from "./signupManager";

const Signup = () => {
  const [signupUser, setSignupUser] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  const handleGoogleSignup = () => {};
  const { register, handleSubmit, errors } = useForm();

  const [passwordError, setPasswordError] = useState("");
  const onSubmit = (data) => {
    if (data.password === data.passwordConfirm) {
      fireEmailCreatingAccount(data);
      setSignupUser(data);
      setPasswordError("");
    } else {
      setPasswordError("Password not matched");
    }

  };
  return (
    <div className="d-flex justify-content-center m-5">
      <div className="col-md-6 m-auto">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          {passwordError && (
            <h6 className="text-danger m-2">{passwordError}</h6>
          )}
          <input
            className="form-control m-2"
            name="displayName"
            placeholder="name"
            ref={register({ required: true })}
          />
          {errors.displayName && <span>This field is required</span>}

          <input
            className="form-control m-2"
            name="email"
            placeholder="email"
            ref={register({ required: true })}
          />
          {errors.email && <span>This field is required</span>}

          <input
            className="form-control m-2"
            name="password"
            placeholder="password"
            ref={register({ required: true })}
          />
          {errors.password && <span>This field is required</span>}

          <input
            className="form-control m-2"
            name="passwordConfirm"
            placeholder="confirm password"
            ref={register({ required: true })}
          />
          {errors.passwordConfirm && <span>This field is required</span>}

          <input
            className="form-control m-2 btn-primary"
            type="submit"
            value="Create an account"
          />
          <p className="text-center">
            Already have an account? <Link to="/login">Login</Link>{" "}
          </p>
        </form>
        <button
          onclick={handleGoogleSignup}
          className="btn btn-info form-control m-2"
        >
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Signup;
