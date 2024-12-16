// App.jsx
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="min-h-screen flex bg-zinc-50 px-20 pt-28 pb-10 relative">
      {/* Sidebar */}
      <aside className="w-[25%] bg-white shadow-xl rounded-xl sticky top-[16vh] h-[80vh]  ">
      <div className="p-4 mt-auto">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src="https://via.placeholder.com/50"
              alt="User"
            />
            <div className="ml-4">
              <p className="text-gray-700 font-medium">Pratham meena</p>
              <p className="text-gray-500 text-sm">yashmeena274@.com</p>
            </div>
          </div>
        </div>
        <nav className="mt-6 px-1 w-full">
          <ul className="w-full flex flex-col gap-1 ">
            <NavLink to={'/admin-panel/users'} className={(e)=>e.isActive ? "bg-zinc-200 px-4 py-2 bg-zinc-500 w-full" : "w-full px-4 py-2 hover:bg-zinc-100" }>
              Users
            </NavLink>
            <NavLink to={'/admin-panel/properties'} className={(e)=>e.isActive ? "bg-zinc-200 px-4 py-2 bg-zinc-500 w-full" : "w-full px-4 py-2 hover:bg-zinc-100" }>
              Properties
            </NavLink>
            <NavLink to={'/admin-panel/bookings'} className={(e)=>e.isActive ? "bg-zinc-200 px-4 py-2 bg-zinc-500 w-full" : "w-full px-4 py-2 hover:bg-zinc-100" }>
              Bookings
            </NavLink>
            <NavLink to={'/admin-panel/payments'} className={(e)=>e.isActive ? "bg-zinc-200 px-4 py-2 bg-zinc-500 w-full" : "w-full px-4 py-2 hover:bg-zinc-100" }>
              Payments
            </NavLink>
            
          </ul>
        </nav>
        
      </aside>

      {/* Main Content */}
      <div className="w-full h-fit">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
