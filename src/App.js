import "./App.css";
import Home from "../src/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./design/Navbar";
import Login from "../src/pages/Login";
import RestaurantHome from "./pages/Restaurant/RestaurantHome";
import Addfood from "./pages/Restaurant/Addfood";
import Deletefood from "./pages/Restaurant/Deletefood";
import Updatefood from "./pages/Restaurant/Updaterfood";
import Orders from "./pages/Restaurant/Orders";
import CustomerHome from "./pages/Customer/CustomerHome";
import Signup from "../src/pages/Signup";
import AdminHome from "./pages/Admin/AdminHome";
import ApproveRestaurants from "./pages/Admin/ApproveRestaurant";
import AllRestaurants from "../src/pages/Admin/AllRestaurants";
import ViewRestaurants from "../src/pages/Customer/ViewRestaurant";
import AuthProvider from "./security/AuthContext";
import Register from "./pages/Register";
import CustomerAuthenticated from "./Authenticated/CustomerAuthenticated";
import RestaurantAuthenticated from "./Authenticated/RestaurantAuthenticated";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <CustomerAuthenticated>
                  <Home />
                </CustomerAuthenticated>
              }
            />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route
              exact
              path="/resthome"
              element={
                <RestaurantAuthenticated>
                  <RestaurantHome />
                </RestaurantAuthenticated>
              }
            />
            <Route exact path="/rest/addfood" element={<Addfood />} />
            <Route exact path="/rest/deletefood" element={<Deletefood />} />
            <Route exact path="/rest/updatefood" element={<Updatefood />} />
            <Route exact path="/rest/orders" element={<Orders />} />
            <Route exact path="/cus/home" element={<CustomerHome />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/admin" element={<AdminHome />} />
            <Route
              exact
              path="/admin/pending"
              element={<ApproveRestaurants />}
            />
            <Route exact path="/admin/viewres" element={<AllRestaurants />} />
            <Route exact path="viewres" element={<ViewRestaurants />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
