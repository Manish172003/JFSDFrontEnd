import axios from "axios";
import { apiClient } from "./ApiClient";

export const executeJwtAuthenticationService = (email, password) =>
  apiClient.post(`api/auth/login`, { email, password });

// http://localhost:8000/api/auth/login

export const registerUser = (email, password) =>
  apiClient.post(`api/auth/customer/signup`, { email, password });

export const registerRestaurant = (email, password) =>
  apiClient.post(`api/auth/restaurant/signup`, { email, password });
