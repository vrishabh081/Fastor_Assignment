import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Restaurant from "./pages/restaurant";
import SingleRestaurant from "./pages/RestaurantDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/restaurant/:category" element={<SingleRestaurant />} />
      </Routes>
    </>
  );
}

export default App;
