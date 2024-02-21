import "./App.css";
import Home from "../src/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./design/Navbar";
import Login from "../src/pages/Login";
import RestaurantHome from "./pages/Restaurant/RestaurantHome";
import Signup from "../src/pages/Signup";
import AdminHome from "./pages/Admin/AdminHome";
import AuthProvider from "./security/AuthContext";
import CustomerAuthenticated from "./Authenticated/CustomerAuthenticated";
import RestaurantAuthenticated from "./Authenticated/RestaurantAuthenticated";
import UnAuthorized from "./pages/UnAuthorized";
import OptionSelection from "./pages/OptionSelection";
import AdminAuthenticated from "./Authenticated/AdminAuthenticated";
import CustomerHome from "./pages/Customer/CustomerHome";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/customerhome"
              element={
                <CustomerAuthenticated>
                  <CustomerHome />
                </CustomerAuthenticated>
              }
            />

            <Route
              exact
              path="/restauranthome"
              element={
                <RestaurantAuthenticated>
                  <RestaurantHome />
                </RestaurantAuthenticated>
              }
            />

            <Route
              exact
              path="/adminhome"
              element={
                <AdminAuthenticated>
                  <AdminHome />
                </AdminAuthenticated>
              }
            />

            {/* <Route exact path="/" element={<Home />} /> */}
            <Route exact path="/signup" element={<OptionSelection />} />
            <Route exact path="/signup/:option" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/unauthorized" element={<UnAuthorized />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
