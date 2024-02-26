import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import googleLogo from "../assets/google-logo.svg";

const SignUp = () => {
  const { createUser, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("error");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("Signed up successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // Signup using google
  const handleRegister = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        // alert("Signed up successfully!")
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 shadow-lg sm:rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Sign Up</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                onSubmit={handleSignUp}
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                </div>

                <div className="justify-center">
                  <p>
                    Already have an account?{" "}
                    <Link to="/login" className=" text-blue-300 underline">
                      Login
                    </Link>{" "}
                  </p>
                </div>

                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-6 py-2">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            <hr />

            <div className=" flex w-full items-center flex-col mt-5 gap-3">
              <button onClick={handleRegister} className="block">
                <img
                  src={googleLogo}
                  alt="google logo"
                  className="w-12 h-12 inline-block"
                />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
