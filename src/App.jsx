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
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentuser } from "./store/actions/userAction";
import IsAdmin from "./components/auth/IsAdmin";
import NotFound from "./pages/partials/NotFound";

const App = () => {
  
  const user = useSelector(store => store.user)
  console.log(user);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(asynccurrentuser());
  },[dispatch])




  return (
    <>
      <Nav />

      <Routes>
      <Route path="/admin-panel" element={<ProtectedRoute><IsAdmin><AdminPanel /></IsAdmin></ProtectedRoute>}>
          {/* Child Route */}
          <Route path="users" element={<AllUser />} />
          <Route path="properties" element={<Allproperties />} />
          <Route path="bookings" element={<AllBookings />} />
          <Route path="payments" element={<AllPayment />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/property/create/" element={<ProtectedRoute><CreateProperty /></ProtectedRoute>} />
        <Route path="/property/edit/:id" element={<ProtectedRoute><EditProperty /></ProtectedRoute>} />
        <Route path="/property/:id" element={<ProtectedRoute><SingleProperty /></ProtectedRoute>} />
        <Route path="/Booking/:id" element={<ProtectedRoute><BookingPage /></ProtectedRoute>} />
        <Route path="/profile/" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />



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
