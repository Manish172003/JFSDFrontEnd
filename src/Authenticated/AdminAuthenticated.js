import { Navigate } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

function AdminAuthenticated({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated && authContext.role1 === "ADMIN")
    return children;

  return <Navigate to="/unauthorized" />;
}

export default AdminAuthenticated;
