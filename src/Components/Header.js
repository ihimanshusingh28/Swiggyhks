import React, { useState } from "react";
import { LOGO_URL } from "../utils.js/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // Get cart items from Redux
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex justify-between items-center shadow-md bg-white px-6 py-4 mb-4 sticky top-0 z-50">
      {/* Logo */}
      <div className="w-32">
        <Link to="/">
          <img className="h-12 object-contain" src={LOGO_URL} alt="Logo" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-6 text-gray-700 font-medium text-base">
        <span className="text-sm">
          Online Status:{" "}
          <span className={onlineStatus ? "text-green-600" : "text-red-600"}>
            {onlineStatus ? "🟢 Online" : "🔴 Offline"}
          </span>
        </span>

        <Link className="hover:text-blue-600 transition" to="/">Home</Link>
        <Link className="hover:text-blue-600 transition" to="/about">About</Link>
        <Link className="hover:text-blue-600 transition" to="/contact">Contact</Link>
        <Link className="hover:text-blue-600 transition" to="/grocery">Grocery</Link>

        <Link
          className="hover:text-blue-600 transition"
          to="/cart"
        >
          Cart ({cartItems.length})
        </Link>

        <button
          className="ml-2 px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() =>
            setButtonName((prev) => (prev === "Login" ? "Logout" : "Login"))
          }
        >
          {buttonName}
        </button>
      </nav>
    </header>
  );
};

export default Header;
