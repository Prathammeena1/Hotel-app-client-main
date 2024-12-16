import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Login from "../Login";
import Signup from "../Signup";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const filterHandler = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  const loginHandler = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  const signupHandler = () => {
    setIsSignupVisible(!isLoginVisible);
  };

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleOutsideClick = (e) => {
    if (
      !document.querySelector(".menu").contains(e.target) &&
      !document.querySelector(".menu-handler").contains(e.target)
    ) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const { pathname } = useLocation();

  return (
    <>
      <nav className="fixed top-0 w-full z-[1]">
        <div className="nav-p1 w-full px-20 flex justify-between items-center border-b border-[#dfdfdf] bg-zinc-50">
          <Link to={'/'} className="logo h-24">
            <img
              draggable="false"
              className="h-full object-cover"
              src="/images/logo.png"
              alt=""
            />
          </Link>
          <div className="flex gap-8 w-fit items-center">
            <Link to={'/property/create'} className="font-[600] text-sm">Add your property</Link>
            <Link to={'/admin-panel/users'} className="font-[600] text-sm">Admin panel</Link>
            <div>
              <i className="ri-global-line text-lg"></i>
            </div>

            {pathname == "/" && (
              <div
                onClick={filterHandler}
                className="py-2 px-5 border border-zinc-400 rounded-lg text-zinc-500 cursor-pointer"
              >
                Filters
              </div>
            )}

            <div
              onClick={toggleMenu}
              className="flex cursor-pointer relative items-center border-2 border[#666] py-1 px-3 rounded-full gap-3 menu-handler"
            >
              <i className="ri-menu-line font-bold"></i>
              <div className="bg-[#666] h-8 aspect-square flex items-end justify-center rounded-full ">
                <div className="rounded-full text-white text-lg  overflow-hidden  ">
                  <i className="ri-user-3-fill text-white"></i>
                </div>
              </div>
              <div
                className={`menu absolute ${
                  isMenuVisible ? "initial" : "hidden"
                } top-[110%] w-[280%] shadow-[0_4px_20px_3px_rgba(0,0,0,0.1)] overflow-hidden z-[2] right-0 bg-zinc-50 rounded-xl`}
              >
                <Link to={"/profile"}>
                <h3  className="text-sm px-4 hover:bg-zinc-200/[.5] cursor-pointer transition-all ease-in-out duration-[.5s] py-6">
                  My profile
                </h3>
                </Link>
                <h3
                  onClick={signupHandler}
                  className="text-sm px-4 hover:bg-zinc-200/[.5] cursor-pointer transition-all ease-in-out duration-[.5s] py-6"
                >
                  Sign up
                </h3>
                <h3
                  onClick={loginHandler}
                  className="text-sm px-4 hover:bg-zinc-200/[.5] cursor-pointer transition-all ease-in-out duration-[.5s] py-6 border-b border-zinc-300"
                >
                  Log in
                </h3>
                
                <h3 className="text-sm px-4 hover:bg-zinc-200/[.5] cursor-pointer transition-all ease-in-out duration-[.5s] py-6">
                  Host an experience
                </h3>
                <h3 className="text-sm px-4 hover:bg-zinc-200/[.5] cursor-pointer transition-all ease-in-out duration-[.5s] py-6">
                  Help Center
                </h3>
                <h3 className="text-sm px-4 hover:bg-zinc-200/[.5] cursor-pointer transition-all ease-in-out duration-[.5s] py-6">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isFilterVisible && (
        <Filter display={isFilterVisible} setDisplay={setIsFilterVisible} />
      )}
      {isLoginVisible && (
        <Login display={isLoginVisible} setDisplay={setIsLoginVisible} />
      )}
      {isSignupVisible && (
        <Signup display={isSignupVisible} setDisplay={setIsSignupVisible} />
      )}
    </>
  );
};

export default Nav;
