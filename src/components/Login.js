import React,{useRef, useState} from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {

  const [isSignInForm,setSignInForm]=useState(true);
  const [errormsg,setErrorMsg]=useState(null);

  const email = useRef(null);
  const password=useRef(null);
  
  const handleClick =() =>{
    // form data validation
    const msg=checkValidData(email.current.value,password.current.value);
    setErrorMsg(msg);
  }
  
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
        <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
          {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />}
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
          <button onClick={handleClick} className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In":"Sign Up"}</button>
          <p onClick={toggleForm} className="p-4 cursor-pointer">{isSignInForm ? "New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}</p>
        </form>
      </div>
    </>
  );
};

export default Login;
