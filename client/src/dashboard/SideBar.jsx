import React, { useContext, useEffect, useState } from "react";

import userImg from "../assets/profile.jpg";

import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowCircleDown,
  HiArrowSmLeft,
  HiArrowSmRight,
  HiBookOpen,
  HiChartPie,
  HiHome,
  HiInbox,
  HiOfficeBuilding,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
  HiUsers,
  HiBackspace,
  HiMenu,
} from "react-icons/hi";
import { AuthContext } from "../context/AuthProvider";

const SideBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

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
    // Add event listener to window resize for responsiveness
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    // Initial check on component mount
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sidebar items
  const sidebarItems = [
    { link: "Home", path: "/", icon: HiHome },
    { link: "Dashboard", path: "/admin/dashboard", icon: HiChartPie },
    {
      link: "Upload Book",
      path: "/admin/dashboard/upload",
      icon: HiOutlineCloudUpload,
    },
    { link: "Manage Books", path: "/admin/dashboard/manage", icon: HiBookOpen },
    { link: "Users", path: "#", icon: HiUser },
    { link: "Products", path: "#", icon: HiShoppingBag },
    { link: "Sign In", path: "/login", icon: HiArrowSmRight },
    { link: "Log Out", path: "/", onClick: handleLogout, icon: HiArrowSmLeft },
    { link: "Upgrade to Pro", path: "#", icon: HiChartPie },
    { link: "Documentation", path: "#", icon: HiViewBoards },
    { link: "Help", path: "#", icon: BiBuoy },
  ];

  return (
    <div className="">
      <div>
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-xl px-4 py-2  z-50"
        >
          {isSidebarOpen ? <HiBackspace /> : <HiMenu />}
        </button>
      </div>

      <Sidebar
        aria-label="Sidebar with content separator example"
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out mt-12 fixed `}
      >
        <Sidebar.Logo
          img={user ? user.photoURL : ""}
          className="bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-xl text-white py-2"
        >
          <p className="text-sm text-white">
            {user ? user.displayName || user.email : ""}
          </p>
        </Sidebar.Logo>

        {/* Sidebar items */}
        <Sidebar.Items className="bg-gradient-to-r to-gray-800 via-gray-900 from-black rounded-xl">
          <Sidebar.ItemGroup>
            {sidebarItems.map(({ link, path, onClick, icon: Icon }) => (
              <Sidebar.Item
                key={path}
                href={path}
                icon={Icon}
                className="text-white hover:bg-gray-700"
                onClick={onClick}
              >
                {link}
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
