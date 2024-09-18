import {  signInWithEmailAndPassword, signInWithPopup, 
          GoogleAuthProvider
   } from "firebase/auth";
import { auth } from "../config";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";
// import App from "../App";

const Login = () => {

const passwordVal = useRef();
const emailVal = useRef();

const [popup , setPopup] = useState(false);
const [uid , setUid] = useState();
const navigate = useNavigate();

    const loginUser = (event) => {
        event.preventDefault();
        console.log(emailVal.current.value);
        console.log(passwordVal.current.value);
        signInWithEmailAndPassword(auth, emailVal.current.value, passwordVal.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user.email);
          setPopup(true)
          setUid(user.email)
          
    })
  .catch((error) => {
    const errorCode = error.code;
    alert("Invalid! Try Again. :(");
    const errorMessage = error.message;
    console.log(errorCode + errorMessage);
    
  });
    }
    const provider = new GoogleAuthProvider();
    const googleLogin = ()=>{
      signInWithPopup(auth, provider)
      .then((result) => {
       const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
       const user = result.user;
       console.log(credential);
       
   
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

    // check user 
// useEffect( function checkUser(){
//   onAuthStateChanged(auth, (user) => {
//     if(user){
//       console.log(user.email);
      
      
//     }else{
//       navigate("login")

//     }
// })
// } 
//     , [])


  return (
    <>
{popup ? <div
  id="popup-modal"
  tabIndex={-1}
  className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center flex md:inset-0 h-[calc(100%-1rem)] max-h-full"
>
  <div className="relative p-4 w-full max-w-md max-h-full">
    <div className="relative top-20 border-purple-800 mx-auto p-6 border w-full shadow-lg rounded-md bg-white">
      <div className="mt-3 text-center">
        <div className="mx-auto mb-2 flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
          <svg
            className="h-6 w-6 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            // xmlnx="http://www.w.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          CONGRATULATIONS!
        </h3>
        <div className="mt-2 px-7 py-3">
          <p className="text-sm text-gray-500">You are successfully Logged In With
          </p>
          <p className="userpara mb-3 text-gray-500 font-bold dark:text-gray-600">
            {uid}
          </p>
        </div>
        <div className="items-center px-4 py-3">
          <button
          onClick={()=>{navigate(`/app`)}}
            className="px-4 py-2 bg-purple-500 text-white
                          text-base font-medium rounded-md w-full
                          shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
 : null}

    <div
  className="bg-no-repeat bg-cover bg-center relative"
  style={{
    backgroundImage:
      "url(https://img.freepik.com/free-photo/studio-background-concept-dark-gradient-purple-studio-room-background-product_1258-53875.jpg)"
  }}
>
  <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
    <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
      <div className="self-start hidden lg:flex flex-col  text-white">
        <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome !! </h1>
        <p className="p-3">
          Greetings and welcome to our site ! We are delighted to see you as a
          part of our community. Feel free to discover, interact, and
          collaborate with us to create something wonderful.
        </p>
      </div>
    </div>
    <div className="flex justify-center self-center z-0">
      <div className="p-9 mb-3 mt-3 mx-auto text-white-100 bg-black dark:bg-black  dark:border-gray-700 rounded-2xl w-100 ">
        <div className="space-y-5">
          <h1 className="text-xl text-white font-bold leading-tight tracking-tight text-white-900 md:text-2xl dark:text-white">
            Login To Your Account
          </h1>
          <hr />
          <form onSubmit={loginUser} className="z-auto space-y-4 md:space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Your Email
              </label>
              <input
                id="email" ref={emailVal}
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type=""
                placeholder="mail@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="z-auto block mb-2 font-medium text-white dark:text-white"
              >
                Password
              </label>
              <input type="password" ref={passwordVal}
                name="password"
                id="password"
                placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <button
              id="btn"
              type="submit"
              className="mx-auto btn btn-outline btn-primary text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-200 dark:focus:ring-gray-800"
            >
              Login
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-300">
              New User?{" "}
              <Link className="font-medium text-primary-700 hover:underline dark:text-primary-500" to={`/register`} >Register Here!</Link>            </p>
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
              <span className="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
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
  </div>
</div>

    </>
  )
}

export default Login