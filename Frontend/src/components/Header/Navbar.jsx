import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { HiChevronDown } from "react-icons/hi";
import { motion } from "framer-motion"; // We'll use framer-motion for animations

const productsPerPage = 5;

const Navbar = ({ onSearch}) => {


  const [showDropdown, setShowDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [value, setValue] = useState(""); // Initialize with an empty string
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Initialize as closed

  const handleToggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleToggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
    // You can apply dark mode styles to the entire app here
    // For example, by adding a class to the root element of your app or using CSS variables
  };

  //<==================Seach / Handle Search ==================>

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/search/${searchTerm}`
      );
      setProducts(response.data);
      onSearch();
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };




  //<=================== Page Navigate ================>
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //<================ Clear Page =============>
  // const clearSearch = () => {
  //   setSearchTerm("");
  //   setProducts([]);
  //   setIsSearching(false); // Set back to false
  // }

  const handleItemClick = (itemName) => {
    // Update the search term with the clicked item's name
    setValue(itemName);
  
    // Close the dropdown (if you have a state variable to control it)
    setDropdownOpen(false);
  
    // Optionally trigger a search here, if needed
    // handleSearch();
  };
  

  // Add a useEffect hook to listen for "Enter" key press
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    };

    // Add the event listener to the input element
    document.addEventListener("keydown", handleKeyPress);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // Empty dependency array to run this effect only once



  return (
    <>
      <nav
        className={`bg-${darkMode ? " bg-[#198754]" : " bg-[#144e5f]"}  px-4 py-3`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-white font-extrabold text-lg">CostCutters</div>
            <div className=" ml-20 ">
              <div className="relative z-10">
                <button
                  onClick={handleToggleDropdown}
                  className="text-black bg-gray-300 h-10 w-10 items-center focus:outline-none hover:bg-gray-200
                  
                }).isRequired"
                >
                  <div className="text-black text-xl ml-2">
                    <HiChevronDown />
                  </div>
                </button>
                {showDropdown && (
                  <div className="absolute right--12 mt-2 w-32 bg-white rounded-xl shadow-xl">
                    <ul className="py-2">
                      <li>
                        <a
                          href="#amazon"
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                        >
                          Amazon!
                        </a>
                      </li>
                      <li>
                        <a
                          href="#flipkart"
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                        >
                          Flipcart!
                        </a>
                      </li>
                      <li>
                        <a
                          href="#ebay"
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                        >
                          eBay!
                        </a>
                      </li>
                      <li>
                        <a
                          href="#topdeals"
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                        >
                          Super Deals!
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-5 ml-[-85px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search and Compare ..."
                className="w-[700px] rounded-sm bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="absolute right-0 bg-[#1f7893] hover:bg-blue-500 top-0  h-full w-9"
                onClick={handleSearch}
              >
                <svg
                  className="h-5 w-5 text-white ml-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>

            <div className="dropdown-content">
              {value &&
                data
                  .filter(
                    (item) => item.Name.startsWith(value) && item.Name !== value
                  )
                  .slice(0, 5)
                  .map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item.Name)}
                    >
                      {item.Name}
                      <hr />
                    </div>
                  ))}
            </div>

            <a href="#today" className="text-white hover:text-blue-300">
              Comparison
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2 2 2m-2-5.7V12m0 7.7h.01"
                />
              </svg>
            </a>
            <Link to="/login" className="text-white hover:text-blue-300">
              Sign Up
            </Link>
          </div>

          {/* Dark Mode Toggle */}
          <div className="hidden md:flex mr-10  items-center">
            <button
              onClick={handleToggleDarkMode}
              className=" text-orange-700 hover:text-orange-400 focus:outline-none"
            >
              {darkMode ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>


      {/* Product cards */}
      {products.length > 0 && (
        <motion.div
          className="flex flex-col items-center min-h-screen py-14 bg-gradient-to-r from-gray-100 via-blue-100 to-indigo-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="grid grid-cols-1 gap-6 w-11/12 md:w-1/2 lg:w-1/3"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {currentProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
              >
                <div className="relative h-56 flex items-center justify-center">
                  <img
                    src={product.Image}
                    alt={product.Name}
                    className="w-48 h-40 object-center object-cover hover:shadow-sm transition-shadow duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-gray-800 font-semibold mb-4 truncate">
                    {product.Name}
                  </h3>
                  <div className="flex justify-between">
                    <button className="flex items-center text-red-500 hover:text-red-600 transition-colors duration-300">
                      <i className="far fa-heart mr-2"></i> Like
                    </button>
                    <Link
                      to={`/compare/${encodeURIComponent(product.Name)}`}
                      className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300"
                    >
                      <i className="fas fa-exchange-alt mr-2"></i> Compare
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="mr-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition-colors duration-300"
            >
              <i className="fas fa-arrow-left mr-1"></i>
            </button>
            <span className="text-gray-700 font-medium">
              {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition-colors duration-300"
            >
              <i className="fas fa-arrow-right ml-1"></i>
            </button>
          </div>
        </motion.div>
      )}

      {/* <button type="button" className="bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring focus:bg-red-600 rounded-md px-4 py-2" onClick={clearSearch}>Clear</button> */}
    </>
  );
};

export default Navbar;
