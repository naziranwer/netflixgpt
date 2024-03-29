import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errormsg, setErrorMsg] = useState(null);
  
  // const navigate=useNavigate();
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    // form data validation
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMsg(msg);

    if (msg) return;

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <>
      <div>
        <Header />
        <div className="absolute w-full">
          <img
          className="h-screen md:w-full"
            src={BG_URL}
            alt="background"
          />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Adress or Mobile Number"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <p className="font-bold text-red-600">{errormsg}</p>
          <button
            onClick={handleClick}
            className="p-4 my-4 bg-red-700 w-full rounded-lg"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={toggleForm} className="p-4 cursor-pointer">
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
