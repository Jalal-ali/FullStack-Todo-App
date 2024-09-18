import {
   signInWithPopup ,
    GoogleAuthProvider} from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config";

 const Register = () => {

  const [popup , setPopup] = useState(false);
const [uid , setUid] = useState(null);
const navigate = useNavigate();



const provider = new GoogleAuthProvider();
const googleLogin = ()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
   const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
   const user = result.user;
   console.log(credential);
   


  // Assuming setPopup and setUid are state setters (e.g., in React)
  setPopup(true);
  setUid(user.email);
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // console.error(`Error Code: ${errorCode}, Message: ${errorMessage}`);
  alert(`Login failed: ${errorMessage + errorCode}`);
});
}
      
  return (
    <>
    {popup ? <div
  id="popup-modal"
  tabIndex={-1}
  className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center flex md:inset-0 h-[calc(100%-1rem)] max-h-full"
>
  <div className="relative p-4 w-full max-w-md max-h-full">
    <div className="relative top-20 border border-gray-800 mx-auto p-6 w-full shadow-lg rounded-md bg-white">
      <div className="mt-3 text-center">
        <div className="mx-auto mb-2 flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg leading-6 font-medium text-green-500">
          CONGRATULATIONS!
        </h3>
        <div className="mt-2 px-7 py-3">
          <p className="text-sm text-gray-500">
            You are successfully Logged In With{" "}
          </p>
          <p className="userpara mb-3 text-gray-500 font-bold dark:text-gray-600">
            {uid}
          </p>
        </div>
        <div className="items-center px-4 py-3">
          <button
            onClick={()=>{navigate(`/app`)}}
            className="px-4 py-2 bg-green-500 text-gray-200
                          text-base font-medium rounded-md w-full
                          shadow-sm hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</div> : null }


    <div
  className="bg-no-repeat bg-cover text-white bg-center relative"
  style={{
    backgroundImage:
      "url(https://t4.ftcdn.net/jpg/03/01/90/79/360_F_301907970_ZVaPcSGe9rgYgRMRGUcbf91YxNwB7d2W.jpg)"
  }}
>
  <div className="min-h-screen sm:flex sm:flex-row mx-auto p-5 justify-center">
    <div className="flex justify-center self-center z-0">
      <div className="p-9 mb-3 me-auto my-auto   text-white-100 bg-gray-900 mx-auto dark:bg-gray-800 dark:border-gray-700 rounded-2xl w-100 ">
        <div className="space-y-5">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-white-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
         <hr />
          <form id="form" className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white-200 dark:text-white" >Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              id="btn"
              type="submit"
              className=" w-full text-white bg-neutral-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button>
            
            <p className="text-sm font-light text-gray-400 dark:text-gray-400">
              Already have an account?{" "}
              <Link className="font-medium text-primary-400 hover:underline dark:text-primary-500" to={`/login`} >Login here</Link>
            </p>
          </form>
          <div className="flex w-full items-center gap-2 py-1 text-sm text-slate-600">
            <div className="h-px w-full bg-slate-200" />
            OR
            <div className="h-px w-full bg-slate-200" />
          </div>
          <button
            onClick={googleLogin}
            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
          >
            <div className="relative flex items-center space-x-5 justify-center">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="absolute  left-0 w-4"
                alt="google logo"
              />
              <span className="block w-max font-semibold tracking-wide text-gray-400 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                Continue with Google
              </span>
            </div>
          </button>
        </div>
        <div className="pt-5 text-center text-gray-400 text-xs">
          <span>
            Copyright © 2024-2025
            <a
              href="https://github.com/Jalal-ali"
              rel=""
              target="_blank"
              title="Ajimon"
              className="text-green hover:text-green-500 "
            >
              Jalal Ali
            </a>
          </span>
        </div>
      </div>
    </div>
    <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
      <div className="self-start hidden lg:flex flex-col  text-white">
        <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome !! </h1>
        <p className="pr-3">
          Greetings and welcome to our site ! We are delighted to see you as a
          part of our community. Feel free to discover, interact, and
          collaborate with us to create something wonderful.
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Register