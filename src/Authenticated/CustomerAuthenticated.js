import { Navigate } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

function CustomerAuthenticated({ children }) {
  const authContext = useAuth();

  if (authContext.isAuthenticated && authContext.role1 === "CUSTOMER")
    return children;

  return <Navigate to="/unauthorized" />;
}

export default CustomerAuthenticated;
