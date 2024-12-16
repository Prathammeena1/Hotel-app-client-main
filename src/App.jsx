// src/App.js
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import { useEffect } from "react";
import SingleProperty from "./pages/SingleProperty";
import Nav from "./pages/partials/Nav";
import BookingPage from "./pages/BookingPage";
import ProfilePage from "./pages/ProfilePage";
import EditProperty from "./pages/EditProperty";
import CreateProperty from "./pages/CreateProperty";
import AdminPanel from "./pages/AdminPanel";
import AllUser from "./pages/partials/AllUser";
import AllPayment from "./pages/partials/AllPayment";
import Allproperties from "./pages/partials/AllProperties";
import AllBookings from "./pages/partials/AllBookings";

const App = () => {

  return (
    <>
      <Nav />

      <Routes>
      <Route path="/admin-panel" element={<AdminPanel />}>
          {/* Child Route */}
          <Route path="users" element={<AllUser />} />
          <Route path="properties" element={<Allproperties />} />
          <Route path="bookings" element={<AllBookings />} />
          <Route path="payments" element={<AllPayment />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/property/create/" element={<CreateProperty />} />
        <Route path="/property/edit/:id" element={<EditProperty />} />
        <Route path="/property/:id" element={<SingleProperty />} />
        <Route path="/Booking/:id" element={<BookingPage />} />
        <Route path="/profile/" element={<ProfilePage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
