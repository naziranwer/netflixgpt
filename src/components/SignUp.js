import React, { useState } from "react";
import Header from "./Header";

const SignUp = () => {
  const [isSignInForm,setSignInForm]=useState(true);

  const toggleForm =()=>{
    setSignInForm(!isSignInForm);
  }

  return (
    <>
      <div  >
        <Header />
        <div className="absolute" >
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background" 
          />
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">{!isSignInForm ? "Sign Up":"Sign In"}</h1>
          <input
            type="text"
            placeholder="Enter Username"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            type="text"
            placeholder="Email Adress or Mobile Number"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <button className="p-4 my-4 bg-red-700 w-full rounded-lg">Sign Up</button>
          <p className="p-4">Already Registered? Sign In Now</p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
