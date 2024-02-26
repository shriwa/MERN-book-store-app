import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import logo from "../assets/logo.png";

// react icons
import {
  FaBarsStaggered,
  FaBlog,
  FaXmark,
  FaPowerOff,
  FaUser,
} from "react-icons/fa6";
import { AuthContext } from "../context/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { user, logout } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logout()
      .then(() => {
        // Sign-out successful.
        alert("Log out successful");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  // navItems here
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Shop", path: "/shop" },
    { link: "Sell your Book", path: "/admin/dashboard" },
    { link: "About", path: "/about" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-5 lg:px-24 px-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black ${
          isSticky ? "sticky top-0 left-0 right-0" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white flex items-center gap-2"
          >
            <img src={logo} alt="" className=" inline-block h-6" />
          </Link>

          {/* nav items for large devices */}
          <ul className="md:flex space-x-16 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                onClick={handleMenuItemClick}
                className=" block text-base text-white uppercase cursor-pointer hover:text-blue-300 "
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for lg devices */}
          <div className="space-x-12 hidden lg:flex items-center text-white">
            {user ? (
              <div className="flex items-center">
                <div>
                  <p className="mr-3">
                    {user.displayName ? user.displayName : user.email}
                  </p>
                </div>
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="flex items-center"
                >
                  <FaPowerOff className="hover:text-blue-300 w-5 h-5" />
                </Link>
              </div>
            ) : (
              <div className="flex items-center">
                <Link to="/login" className="flex items-center">
                  <p className="mr-3 hover:text-blue-300">Login</p>
                  <FaUser />
                </Link>
              </div>
            )}
          </div>

          {/* menu button for mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-white" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for sm devices */}
        <div
          className={`space-y-4 px-6 mt-14 py-6  bg-gradient-to-r from-gray-600 to-gray-600 rounded  ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          } md:hidden`}
        >
          <div className=" text-white ">
            {user ? (
              <div className="flex items-center">
                <div>
                  <p className="mr-3">
                    {user.displayName ? user.displayName : user.email}
                  </p>
                </div>
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="flex items-center"
                >
                  <FaPowerOff className="hover:text-blue-300 w-5 h-5" />
                </Link>
              </div>
            ) : (
              <div className="flex items-center">
                <Link to="/login" className="flex items-center">
                  <p className="mr-3 hover:text-blue-300">Login</p>
                  <FaUser />
                </Link>
              </div>
            )}
          </div>

          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              onClick={handleMenuItemClick}
              className=" block text-base text-white uppercase cursor-pointer hover:text-blue-300"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
