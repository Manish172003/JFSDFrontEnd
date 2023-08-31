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
import AllRestaurants from "../src/pages/Admin/AllRestaurants"
import ViewRestaurants from "../src/pages/Customer/ViewRestaurant"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/resthome" element={<RestaurantHome />} />
          <Route exact path="/rest/addfood" element={<Addfood />} />
          <Route exact path="/rest/deletefood" element={<Deletefood />} />
          <Route exact path="/rest/updatefood" element={<Updatefood />} />
          <Route exact path="/rest/orders" element={<Orders />} />
          <Route exact path="/cus/home" element={<CustomerHome />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/admin" element={<AdminHome />} />
          <Route exact path="/admin/pending" element={<ApproveRestaurants />} />
          <Route exact path="/admin/viewres" element={<AllRestaurants />} />
          <Route exact path="viewres" element={<ViewRestaurants />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
