import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import fireEmailCreatingAccount from "./signupManager";

const Signup = () => {
  const [signupUser, setSignupUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleGoogleSignup = () => {};
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    fireEmailCreatingAccount(data)
    setSignupUser(data);
    console.log(data)
  }
  console.log(signupUser);
  return (
    <div className='w-25'>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control m-2"
          name="name"
          placeholder="name"
          ref={register({ required: true })}
        />
        {errors.name && <span>This field is required</span>}

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
  );
};

export default Signup;
