import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'; // Import the Material Design arrow icons

import { Link } from 'react-router-dom';

const EbayTopDeals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/compare/product'); // Updated URL to match your backend
        setProducts(response.data);
      } catch (error) {
        console.error('An error occurred while fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const [filter, setFilter] = useState('All'); // Initial filter value
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const filteredProducts = products.filter((product) => {
    return filter === 'All' || product.category === filter;
  });

  // Calculate the total number of pages based on the number of products and products per page
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get the products to display on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div id='ebay' className="bg-gray-100 p-6 relative">
      {/* Heading */}
      <h1 className="text-4xl  text-center text-[#303030] font-semibold mb-4 mt-24"><span className='text-red-600 font-bold'>Ebay</span> Top Deals</h1>
      <p className='text-center text-black text-lg  mb-14'>Affiliate, comparison performance and multvendor in, it’s the smart choice for client.</p>

       {/* //Arrow Navigations! */}
       <div className="flex justify-end absolute top-52 right-20">
      <button
          onClick={handlePrevPage}
          className={`px-3 py-2 ${
            currentPage === 1
              ? 'bg-gray-50 text-gray-300 cursor-not-allowed'
              : 'hover:bg-gray-200'
          } rounded-md`}
          disabled={currentPage === 1}
        >
          <MdKeyboardArrowLeft size={18} />
        </button>
        <span className="mx-2 py-2">/</span>
        <button
          onClick={handleNextPage}
          className={`px-3 py-2 ${
            currentPage === totalPages
              ? 'bg-gray-50 text-gray-300 cursor-not-allowed'
              : 'hover:bg-gray-200'
          } rounded-md`}
          disabled={currentPage === totalPages}
        >
          <MdKeyboardArrowRight size={18} />
        </button>
      </div>

      {/* Filter dropdown */}
      {/* <div className="flex justify-end mb-2">
        <select
          className="border p-2 rounded-lg"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="All">All</option>
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
        </select>
      </div> */}


      {/* Product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg cursor-pointer overflow-hidden hover:shadow-xl"
            onClick={() => handleImageClick(product)}
          >
            <div
              className="w-48 h-40 top-2 left-6 object-cover rounded-t-lg relative"
              style={{
                backgroundImage: `url(${product.Image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-40 bg-blue-200"
                style={{ zIndex: 1 }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.Name.split(' ').slice(0, 8).join(' ')}...</h3>
              <div className="flex justify-between">
                <button className="text-red-500">
                  <i className="fas fa-heart"></i> Like
                </button>
                <Link to={`/compare/${encodeURIComponent(product.Name)}`} className="text-blue-500">
                  <i className="fas fa-balance-scale"></i> Compare
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {/* <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          className={`px-3 py-2 mx-2 ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          } rounded-md`}
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNextPage}
          className={`px-3 py-2 mx-2 ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          } rounded-md`}
          disabled={currentPage === totalPages}
        >
          <FaArrowRight />
        </button>
      </div> */}


    </div>
  );
};

export default EbayTopDeals;
