import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Logistics Services", path: "/logistics" },
    { name: "Furnished Apartments", path: "/apartments" },
    { name: "Aviation Consulting", path: "/aviation" },
    { name: "Contact", path: "/contactus" },
  ];

  const navLinkClass = ({ isActive }) =>
    `hover:text-sky-400 transition ${
      isActive
        ? "text-sky-400 border-b-2 border-sky-400 pb-1"
        : ""
    }`;
  return (
    <nav className="fixed top-0 z-50 w-full">
     <div className={`flex items-center justify-between px-4 sm:px-6 h-[63px] w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#001f3f]/90 backdrop-blur-md shadow-lg"
            : "bg-white/5"
        }`} >
        <Link to="/" className="flex items-center gap-2">
          <img src={logo}  alt="Sky Swift"
            className={`transition-all duration-300 w-[80px] sm:w-[100px] ${
              scrolled ? "brightness-200 scale-110" : "brightness-110"
            }`} />
          <span className="text-xs text-white font-sm sm:text-sm md:text-base">
            Sky Swift Limited
          </span>
        </Link>
        <ul className="items-center hidden text-white gap-7 font-sm md:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={navLinkClass}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button  onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 z-[2000]" >
          <span className={`w-8 h-[3px] bg-white rounded transition-all ${
              open ? "rotate-45 translate-y-2" : "" }`} />
          <span className={`w-8 h-[3px] bg-white rounded transition-all ${
              open ? "opacity-0 scale-x-0" : "" }`} />
          <span className={`w-8 h-[3px] bg-white rounded transition-all ${
            open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-screen w-[80vw] sm:w-[70vw] max-w-[420px] bg-[#04152a]
        text-white shadow-2xl transition-all duration-300 z-[1500] ${
          open ? "translate-x-0" : "translate-x-full" } pt-24`} >
        <ul className="px-6 space-y-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} onClick={() => setOpen(false)}
                className="block p-3 transition rounded-lg hover:bg-white/10" >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[1400]"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
};
export default Navbar;