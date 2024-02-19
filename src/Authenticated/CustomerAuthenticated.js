import { Navigate } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

function CustomerAuthenticated({ children }) {
  const authContext = useAuth();

  if (authContext.isAuthenticated) return children;

  return <Navigate to="/login" />;
}

export default CustomerAuthenticated;
