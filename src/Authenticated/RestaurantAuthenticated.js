import { Navigate } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

function RestaurantAuthenticated({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated && authContext.role1 === "RESTAURANT")
    return children;

  return <Navigate to="/login" />;
}

export default RestaurantAuthenticated;
