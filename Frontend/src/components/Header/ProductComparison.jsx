import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import axios from 'axios';

function App() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);

  const [product, setProduct] = useState({
    Name: "",
    Image: "",
    AmazonPrice: "",
    FlipkartPrice: "",
    eBayPrice: "",
    AmazonLink: '',
    FlipkartLink: '',
    eBayLink: '',
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/compare/${decodedName}`
        );
        const data = response.data;

        console.log(data);

        const amazonPrice = data.amazonProduct ? data.amazonProduct.Price : null;
        const flipkartPrice = data.flipkartProduct ? data.flipkartProduct.Price : null;
        const eBayPrice = data.ebayProduct ? data.ebayProduct.Price : null;

        const amazonLink = data.amazonProduct ? data.amazonProduct.Link : null;
        const flipkartLink = data.flipkartProduct ? data.flipkartProduct.Link : null;
        const eBayLink = data.ebayProduct ? data.ebayProduct.Link : null;

        setProduct({
          Name: data.amazonProduct ? truncateName(data.amazonProduct.Name) : "",
          Image: data.amazonProduct ? data.amazonProduct.Image : "",
          AmazonPrice: amazonPrice,
          FlipkartPrice: flipkartPrice,
          eBayPrice: eBayPrice,
          AmazonLink: amazonLink,
          FlipkartLink: flipkartLink,
          eBayLink: eBayLink,
        });
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };

    fetchProductDetails();
  }, [decodedName]);

  function truncateName(name) {
    const words = name.split(' ');
    return words.slice(0, 8).join(' ');
  }

  const productName = product.Name;
  const productRating = 3.5;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-4/5 md:w-2/3 lg:w-1/2 p-8 bg-gray-300 rounded-lg shadow-2xl flex">
        <div className="w-1/2">
          <div className="relative aspect-w-16 aspect-h-10">
            <img
              src={product.Image}
              alt={productName}
              className="object-cover w-full h-full rounded-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
        <div className="w-1/2 ml-8">
          <h1 className="text-xl font-semibold mb-4">{productName}.....</h1>
          <h1 className="mt-3 text-yellow-600">Ratings!</h1>
          <div className="mb-2">
            <ReactStars
              count={5}
              value={productRating}
              size={24}
              edit={false}
              isHalf={true}
              activeColor="#ffd700"
            />
          </div>
          <div className=" items-center mb-2">
            <p className="mr-2 text-red-700">Best Price:</p>
            <div className="flex mt-2 ml-3 items-center">
              <div className="">
                <img
                  src="/amazon.png"
                  alt="Amazon"
                  className="w-8 h-3"
                />
              </div>
              <p className="ml-1">Amazon</p>
              <p className="mr-2 ml-6">{product.AmazonPrice}</p>
              <button className="px-4 py-1 ml-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                <a href={product.AmazonLink} target="_blank" rel="noopener noreferrer">Buy</a>
              </button>
            </div>
          </div>
          <div className="flex items-center mt-4 mb-2 ml-3">
            <div className="">
              <img
                src="/flipkart.png"
                alt="Flipkart"
                className="w-8 h-6"
              />
            </div>
            <p className="ml-1">Flipkart</p>
            <p className="mr-2 ml-7 text-yellow-600"><span className=" text-red-600"></span>{product.FlipkartPrice}</p>
            <button className="px-4 py-1 ml-6 bg-green-500 text-white rounded-md hover:bg-green-600">
              <a href={product.FlipkartLink} target="_blank" rel="noopener noreferrer">Buy</a>
            </button>
          </div>
          <div className="flex items-center mt-4 ml-3">
            <div className="">
              <img
                src="/ebay.png"
                alt="eBay"
                className="w-8 h-6 "
              />
            </div>
            <p className="ml-1">eBay</p>
            <p className="mr-2 ml-12">{product.eBayPrice}</p>
            <button className="px-4 py-1 ml-6 bg-orange-500 text-white rounded-md hover:bg-orange-600">
              <a href={product.eBayLink} target="_blank" rel="noopener noreferrer">Buy</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
