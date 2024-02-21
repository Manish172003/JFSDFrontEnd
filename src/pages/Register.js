import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

const Register = () => {
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [restaurantEmail, setRestaurantEmail] = useState("");
  const [restaurantPassword, setRestaurantPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();
  const authContext = useAuth();

  function handleCustomerEmailChange(event) {
    setCustomerEmail(event.target.value);
  }

  function handleCustomerPasswordChange(event) {
    setCustomerPassword(event.target.value);
  }

  function handleRestaurantEmailChange(event) {
    setRestaurantEmail(event.target.value);
  }

  function handleRestaurantPasswordChange(event) {
    setRestaurantPassword(event.target.value);
  }

  async function handleRegiserSubmit(role) {
    let userRoleEmail, userRolePassword;

    if (role === "customer") {
      userRoleEmail = customerEmail;
      userRolePassword = customerPassword;
    } else if (role === "restaurant") {
      userRoleEmail = restaurantEmail;
      userRolePassword = restaurantPassword;
    }

    if (await authContext.register(userRoleEmail, userRolePassword, role)) {
      navigate(`/login`);
    } else {
      setShowErrorMessage(true);
    }
  }

  return (
    <div className="md:flex">
      <section className="bg-blue-500 dark:bg-gray-900 w-full md:w-1/2">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Customer Sign up
              </h1>

              <div>
                <label
                  htmlFor="customerEmail"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  value={customerEmail}
                  onChange={handleCustomerEmailChange}
                  type="email"
                  name="customerEmail"
                  id="customerEmail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="customerPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  value={customerPassword}
                  onChange={handleCustomerPasswordChange}
                  type="password"
                  name="customerPassword"
                  id="customerPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <button
                type="button"
                onClick={() => handleRegiserSubmit("customer")}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-500 dark:bg-gray-900 w-full md:w-1/2">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Restaurant Sign up
              </h1>

              <div>
                <label
                  htmlFor="restaurantEmail"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  value={restaurantEmail}
                  onChange={handleRestaurantEmailChange}
                  type="email"
                  name="restaurantEmail"
                  id="restaurantEmail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="restaurantPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  value={restaurantPassword}
                  onChange={handleRestaurantPasswordChange}
                  type="password"
                  name="restaurantPassword"
                  id="restaurantPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <button
                type="button"
                onClick={() => handleRegiserSubmit("restaurant")}
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
