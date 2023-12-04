import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Heading from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./components/home/Home.jsx";
import Contact from "./components/contact/Contact.jsx";
import About from "./components/about/About.jsx";
import Cart from "./components/cart/Cart.jsx";
import Shipping from "./components/cart/Shipping.jsx";
import MyOrders from "./components/myOrders/MyOrders.jsx";
import OrderDetails from "./components/myOrders/OrderDetails.jsx";
import LoginRegister from "./components/login/LoginRegister.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/login/Register.jsx";
import Logout from "./components/login/Logout.jsx";

import "./styles/styles.css";

function App() {
  return (
    <Router>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Shipping" element={<Shipping />} />
        <Route path="/myOrders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/LoginRegister" element={<LoginRegister />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;




