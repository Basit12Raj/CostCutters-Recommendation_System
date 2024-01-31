import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 transition-all duration-500 ease-in-out mt-10">
      <div className="container mx-auto flex flex-wrap justify-between ">
        {/* Logo & Description */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 space-y-4">
          <div className="flex justify-center md:justify-start">
            <span className="text-2xl text-yellow-600 font-bold tracking-wider ml-60">
              CostCutters
            </span>
          </div>
          {/* <p className="mt-4 text-sm leading-loose text-center md:text-left">
            Your trusted source for product comparisons. Find the best deals and save money on your favorite products.
          </p> */}
          <p className="mt-4 ml-48 text-sm leading-loose">
            <span className="block ml-4 mb-2">
              Your trusted source for product
            </span>
            <span className="block ml-4 mb-2">
              comparisons. Find the best deals
            </span>
            <span className="block ">
              and save money on your favorite products.
            </span>
          </p>
          <div className="flex justify-center mt-6 py-6 space-x-4">
            {/* Simplified social media icons with map function */}
            <span className="mr-3 text-lg">FOLLOW US </span>
             {/* {["twitter", "facebook", "pinterest", "envelope", "instagram"].map(
              (icon, index) => ( */}
            {[
              { icon: "twitter", link: "https://x.com/abdulbasit7988?t=I_UOIaTe1ae46a0JlHDDng&s=09" },
              { icon: "facebook", link: "https://www.facebook.com/your_page" },
              {
                icon: "pinterest",
                link: "https://www.pinterest.com/your_username",
              },
              { icon: "envelope", link: "mailto:abasitak12@gmail.com" }, // Use "mailto:" for email
              {
                icon: "instagram",
                link: "https://instagram.com/hotcodewithab?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
              },
            ].map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                // href="#"
                // href={
                //   icon === "instagram"
                //     ? "https://instagram.com/hotcodewithab?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                //     : "#"
                // }
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Recommended for security reasons
                className={`hover:scale-110 transform transition-transform duration-300 text-2xl ${
                  icon === "envelope" ? "far" : "fab"
                } fa-${icon}`}
              ></a>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/4">
          <h4 className="text-xl font-bold text-left px-5 mb-4">
            Recent Reviews
          </h4>
          <div className="mb-4 flex items-center">
            <img
              src="ab.jpg" // Replace with your product image URL
              alt="Product 1"
              className="w-16 h-16 mr-4 rounded-lg"
            />
            <div>
              <span className="text-lg font-semibold">Laptop HP I7</span>
              <div className="text-yellow-400">
                {/* Insert star rating component here */}
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star-half-alt text-yellow-400"></i>
              </div>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <img
              src="ab.jpg" // Replace with your product image URL
              alt="Product 2"
              className="w-16 h-16 mr-4 rounded-lg"
            />
            <div>
              <span className="text-lg font-semibold">I Phone 14</span>
              <div className="text-yellow-400">
                {/* Insert star rating component here */}
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star-half-alt text-yellow-400"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/4 space-y-4 px-6">
          <h4 className="text-xl font-bold tracking-wider  mb-4 text-center md:text-left">
            Contact Us !!!
          </h4>
          <div>
            <p className="flex items-center  space-x-2">
              <i className="fas fa-phone mr-2"></i>
              <span>+92-318-4989614</span>
            </p>
            <p className="flex items-center space-x-2 mt-2">
              <i className="far fa-envelope mr-2"></i>
              <span>abasitak12@gmail.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 border-t  border-gray-800">
        &copy; {new Date().getFullYear()} CostCutters. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-8">
//       <div className="container mx-auto flex flex-wrap justify-between">
//         {/* Left side */}
//         <div className="w-full md:w-1/2 mb-4 md:mb-0">
//           <div className="flex items-center">
//             <span className="text-2xl ml-60 font-bold">CostCutters</span>
//           </div>
//           <p className="mt-4 text-sm leading-loose">
//             <span className="block mb-2">Your trusted source for product</span>
//             <span className="block mb-2">comparisons. Find the best deals</span>
//             <span className="block">
//               and save money on your favorite products.
//             </span>
//           </p>

//           <div className="mt-6">
//             {/* Social Media Icons */}
//             <a href="#" className="text-blue-400 hover:text-blue-600 mr-4">
//               <i className="fab fa-twitter text-2xl"></i>
//             </a>
//             <a href="#" className="text-blue-500 hover:text-blue-700 mr-4">
//               <i className="fab fa-facebook text-2xl"></i>
//             </a>
//             <a href="#" className="text-red-400 hover:text-red-600 mr-4">
//               <i className="fab fa-pinterest text-2xl"></i>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-gray-600 mr-4">
//               <i className="far fa-envelope text-2xl"></i>
//             </a>
//             <a href="#" className="text-pink-400 hover:text-pink-600">
//               <i className="fab fa-instagram text-2xl"></i>
//             </a>
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="w-full md:w-1/4">
//           <h4 className="text-xl font-bold mb-4">Recent Reviews</h4>
//           <div className="mb-4 flex items-center">
//             <img
//               src="ab.jpg" // Replace with your product image URL
//               alt="Product 1"
//               className="w-16 h-16 mr-4 rounded-lg"
//             />
//             <div>
//               <span className="text-lg font-semibold">Laptop HP I7</span>
//               <div className="text-yellow-400">
//                 {/* Insert star rating component here */}
//                 <i className="fas fa-star text-yellow-400"></i>
//                 <i className="fas fa-star text-yellow-400"></i>
//                 <i className="fas fa-star text-yellow-400"></i>
//                 <i className="fas fa-star text-yellow-400"></i>
//                 <i className="fas fa-star-half-alt text-yellow-400"></i>
//               </div>
//             </div>
//           </div>
//           <div className="mb-4 flex items-center">
//             <img
//               src="ab.jpg" // Replace with your product image URL
//               alt="Product 2"
//               className="w-16 h-16 mr-4 rounded-lg"
//             />
//             <div>
//               <span className="text-lg font-semibold">I Phone 14</span>
//               <div className="text-yellow-400">
//                 {/* Insert star rating component here */}
//                 <i className="fas fa-star text-yellow-400"></i>
//                 <i className="fas fa-star text-yellow-400"></i>
//                 <i className="fas fa-star text-yellow-400"></i>
//                 <i className="fas fa-star text-yellow-400"></i>
//                 <i className="fas fa-star-half-alt text-yellow-400"></i>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Us Form */}
//         <div className="w-full md:w-1/4">
//           <h4 className="text-xl font-bold mb-4">Contact Us</h4>
//           <form>
//             <div className="mb-4 mx-2">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full px-4 py-2 border rounded"
//               />
//             </div>
//             <div className="mb-4 mx-2">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-4 py-2 border rounded"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-32 bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-300"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className="text-center mt-8">
//         &copy; {new Date().getFullYear()} CostCutters. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
