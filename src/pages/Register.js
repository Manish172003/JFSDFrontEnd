import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

// function LoginComponent() {
//   const [username, setUserName] = useState("tester@gmail.com");

//   const [password, setPassword] = useState("");

//   const [showErrorMessage, setShowErrorMessage] = useState(false);

//   const navigate = useNavigate();

//   const authContext = useAuth();

//   function handleUsernameChange(event) {
//     setUserName(event.target.value);
//   }

//   function handlePasswordChange(event) {
//     setPassword(event.target.value);
//   }

//   async function handleSubmit() {
//     console.log(username, password);
//     if (await authContext.login(username, password)) {
//       console.log("ok exec")
//       // navigate(`/welcome/${username}`);
//     } else {
//       setShowErrorMessage(true);
//     }
//   }

//   return (
//     <div className="Login">
//       <h1>Time to Login!</h1>
//       {showErrorMessage && (
//         <div className="errorMessage">
//           Authentication Failed. Please check your credentials.
//         </div>
//       )}
//       <div className="LoginForm">
//         <div>
//           <label>User Name:</label>
//           <input
//             type="text"
//             name="email"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <div>
//           <button type="button" name="login" onClick={handleSubmit}>
//             login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

const Register = () => {
  // const [role, setRole] = useState("customer");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();

  const authContext = useAuth();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit1(role) {
    // e.preventDefault();
    console.log(email, password,role);
    if (await authContext.register(email, password,role)) {
      console.log("ok exec");
      navigate(`/login`);
    } else {
      setShowErrorMessage(true);
    }
  }
  return (
    <div className="flex">
      <section className="bg-gray-50 dark:bg-gray-900 w-1/2">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Customer Sign up
              </h1>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={handlePasswordChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <button
                type="button"
                value="customer"
                onClick={() => handleSubmit1("customer")}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-900 w-1/2">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Restaurant Sign up
              </h1>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={handlePasswordChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <button
                type="button"
                value="restaurant"
                onClick={() => handleSubmit1("restaurant")}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;

// export default LoginComponent;
