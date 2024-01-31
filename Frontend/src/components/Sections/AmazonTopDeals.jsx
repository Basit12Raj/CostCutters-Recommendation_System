import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'; // Import the Material Design arrow icons
import { Link } from 'react-router-dom';

const AmazonTopDeals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/compare/products');
        setProducts(response.data);
      } catch (error) {
        console.error('An error occurred while fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const filteredProducts = products.filter((product) => {
    return filter === 'All' || product.category === filter;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

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
    <div id='amazon' className="bg-gray-100 p-6 relative">
      <h1 className="text-4xl text-[#303030] ml-8 text-center font-semibold mb-4 mt-20">
        <span className='text-red-700 font-bold'>Amazon</span> Top Deals
      </h1>
      <p className='text-center text-black text-lg mb-14'>Affiliate, comparison performance and multvendor in, it’s the smart choice for client.</p>

     {/* //Arrow Navigations! */}
      <div className="flex justify-end absolute top-48 right-20">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg cursor-pointer overflow-hidden hover:shadow-xl"
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
              <h3 className="text-lg font-semibold mb-2">{product.Name ? product.Name.split(' ').slice(0, 8).join(' ') : ''}...</h3>
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
    </div>
  );
};

export default AmazonTopDeals;
