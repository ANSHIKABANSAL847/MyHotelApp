import React from "react";
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import NavigationBar from "./Components/Navbar";  // Ensure correct import
import Home from "./Components/Home";
import Rooms from "./Components/Rooms";
import ContactUs from "./Components/Contact";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Location from "./Components/Location";
import Services from "./Components/Services";
import Login from "./Components/Login";
import Admin from "./Components/Admin";

import ManageBookings from "./Components/ManageBookings";
import ManageUser from "./Components/ManageUser";
import ManageRoom from "./Components/ManageRoom"; 
import Book1 from "./Components/Book1";
import RoomDetails from "./Components/RoomDetails";  // Ensure correct import
//import BookingScreen from "./BookingScreen";
import UserDashboard from "./Components/Userdashboard";



const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  return isAdmin ? children : <Navigate to="/login" replace />;
};

const handleLogout = () => {
  localStorage.removeItem('isAdmin');
  window.location.href = '/login';
};
const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar /> {/* ✅ Add Navbar inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/location" element={<Location />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
         
         <Route path="/room-details/:id" element={<RoomDetails />} />
        <Route path="/book1" element={<Book1 />} />
        
        <Route path ="/Userdashboard"  element={<UserDashboard />} />
        <Route path="/admin" element={<ProtectedRoute><Admin onLogout={handleLogout} /></ProtectedRoute>}>
          <Route index element={<Navigate to="/admin/bookings" replace />} />
          <Route path="bookings" element={<ManageBookings />} />
          <Route path="users" element={<ManageUser />} />
          <Route path="room" element={<ManageRoom />} />
        </Route>
        {/* <Route path="/Bookingscreen" element={<BookingScreen/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;





