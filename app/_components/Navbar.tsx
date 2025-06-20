import React from "react";

function Navbar() {
  return (
    <div className="py-4 mt-4.5 flex flex-col sm:flex-row items-center justify-between gap-3">
      {/* 1 */}
      <div>
        <nav className="space-x-3 sm:space-x-6">
          <a href="/" className="hover:text-orange-300">
            Home
          </a>
          <a href="/" className="hover:text-orange-300">
            Shop
          </a>
          <a href="/" className="hover:text-orange-300">
            Shop Detail
          </a>
          <a href="/" className="hover:text-orange-300">
            Page
          </a>
          <a href="/" className="hover:text-orange-300">
            Contact
          </a>
        </nav>
      </div>
      {/* 2 */}
      <div>
        <nav className="space-x-6">
          <a href="/" className="hover:text-orange-300">
            Login
          </a>
          <a href="/" className="hover:text-orange-300">
            Register
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
