import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SecondNavbar = ({ onOurStoreClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };


  const handleOurStoreClick = () => {
    onOurStoreClick();
    // Additional logic if needed
  };

  return (
    <nav className="bg-[#198754] text-white px-8 py-3">
      <div className="flex items-center ">
        <div className="relative z-10">
          <button
            onClick={handleToggleDropdown}
            className={`hover:text-white focus:outline-none flex items-center`}
          >
            Shop Categories
            <svg
              className={`h-5 w-5 ml-2 ${showDropdown ? 'transform rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showDropdown && (
            <div className="absolute mt-2 text-sm w-40 bg-white rounded-lg shadow-lg">
              <ul className="py-2">
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white`}
                  >
                    Electronics!
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white`}
                  >
                    Health & Beauty!
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white`}
                  >
                    Fashion!
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white`}
                  >
                    Sporting goods!
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white`}
                  >
                    Books & Magazines!
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white`}
                  >
                    Computers & IT!
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="flex space-x-4 px-8">
          {/* <a href="#" className="hover:text-blue-300 accent-current">
            Home
          </a> */}
          <a href="#" onClick={handleOurStoreClick} className="hover:text-blue-300">
            Our Store
          </a>
          {/* <Link to="/blog" className="hover:text-blue-300">
            Blogs
          </Link> */}
          <Link to="/contact" className="hover:text-blue-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SecondNavbar;
