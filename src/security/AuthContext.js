import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import {
  executeJwtAuthenticationService,
  registerRestaurant,
  registerUser,
} from "../api/AuthenticationApiService";
import axios from "axios";

//1: Create a Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//2: Share the created context with other components
export default function AuthProvider({ children }) {
  //3: Put some state in the context
  const storedToken = localStorage.getItem("authToken");
  const storedRole = localStorage.getItem("role");
  // Initialize state with the stored token or null
  const [isAuthenticated, setAuthenticated] = useState(!!storedToken);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(storedToken);
  const [role1, setRole1] = useState(storedRole);

  // function login(username, password) {
  //     if(username==='in28minutes' && password==='dummy'){
  //         setAuthenticated(true)
  //         setUsername(username)
  //         return true
  //     } else {
  //         setAuthenticated(false)
  //         setUsername(null)
  //         return false
  //     }
  // }

  // async function login(username, password) {

  //     const baToken = 'Basic ' + window.btoa( username + ":" + password )

  //     try {

  //         const response = await executeBasicAuthenticationService(baToken)

  //         if(response.status==200){
  //             setAuthenticated(true)
  //             setUsername(username)
  //             setToken(baToken)

  //             apiClient.interceptors.request.use(
  //                 (config) => {
  //                     console.log('intercepting and adding a token')
  //                     config.headers.Authorization = baToken
  //                     return config
  //                 }
  //             )

  //             return true
  //         } else {
  //             logout()
  //             return false
  //         }
  //     } catch(error) {
  //         logout()
  //         return false
  //     }
  // }

  async function login(username, password) {
    try {
      // const response = await axios.post(
      //   "http://localhost:8000/api/auth/login",
      //   {
      //     email,
      //     password,
      //   }
      // );
      const response = await executeJwtAuthenticationService(
        username,
        password
      );

      // return true;

      if (response.status == 200) {
        const jwtToken = "Bearer " + response.data.jwt;

        setAuthenticated(true);
        setUsername(username);
        setToken(jwtToken);
        setRole1(response.data.role);
        localStorage.setItem("authToken", jwtToken);
        localStorage.setItem("role", response.data.role);
        console.log("Token Cmng");

        apiClient.interceptors.request.use((config) => {
          console.log("intercepting and adding a token");
          config.headers.Authorization = jwtToken;
          return config;
        });

        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      console.log("not executed");
      return false;
    }
  }

  async function register(email, password, role) {
    try {
      if (role === "customer") {
        const response = await registerUser(email, password);

        if (response.status == 201) {
          console.log(response.status);
          return true;
        } else {
          return false;
        }
      } else {
        const response = await registerRestaurant(email, password);

        if (response.status == 201) {
          console.log(response.status);
          return true;
        } else {
          return false;
        }
      }
    } catch (error) {
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
    setToken(null);
    setUsername(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        register,
        username,
        token,
        role1,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
