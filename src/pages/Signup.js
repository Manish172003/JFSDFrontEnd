import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

const SignUp = () => {
  const { option } = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  console.log(option);

  const navigate = useNavigate();
  const authContext = useAuth();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await authContext.register(email, password, option);
      navigate(`/login`);
    } catch (error) {
      setShowErrorMessage(true);
      // Handle the error as needed
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Sign Up as {option.charAt(0).toUpperCase() + option.slice(1)}
        </h1>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            id="email"
            className="w-full p-2 border mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="name@company.com"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            id="password"
            className="w-full p-2 border mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
        >
          Sign Up
        </button>

        {showErrorMessage && (
          <p className="mt-4 text-red-500 text-sm text-center">
            Registration failed. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
