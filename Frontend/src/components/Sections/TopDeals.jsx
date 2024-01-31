import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopDeals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/compare/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('An error occurred while fetching data: ', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter(id => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  return (
    <div id='topdeals' className="p-8">
      <h1 className="text-4xl text-center text-black font-bold mb-4 mt-2">
        Super<span className='text-red-600'>Deals</span>
      </h1>
      <p className='text-center text-black text-lg mb-6'>Top products, Incredible prices</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-content-center"> {/* Added place-content-center */}
        {loading ? (
          <p className="col-span-full text-center text-white text-xl">Loading products...</p>
        ) : (
          products.slice(0, 6).map((product) => (
            <div key={product.id} className="bg-white shadow-xl rounded-lg h-full">
              <div className="relative h-44 overflow-hidden rounded-t-lg">
                <img
                  src={product.Image}
                  alt={product.Name}
                  className="w-48 h-auto mt-7 object-contain transform transition-transform duration-300 hover:scale-110 mx-auto" // Updated image styling
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm text-black font-semibold mt-2 mb-2">
                {product.Name ? product.Name.split(' ').slice(0, 8).join(' ') : ''}  ...
                </h3>
                <div className="flex justify-between">
                  <button className="text-red-500" onClick={() => toggleLike(product.id)}>
                    <i className={`fas fa-heart ${likedProducts.includes(product.id) ? 'text-red-700' : ''}`}></i> Like
                  </button>
                  <Link to={`/compare/${encodeURIComponent(product.Name)}`} className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
                    <i className="fas fa-balance-scale"></i> Compare
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TopDeals;
