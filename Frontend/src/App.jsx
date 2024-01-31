//App.jsx
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Header/Navbar";
import SecondNavbar from "./components/Header/SecondNavbar";
import AmazonTopDeals from "./components/Sections/AmazonTopDeals";
import Footer from "./components/Sections/Footer";
import { Contact } from "./components/Header/Contact";
import { Register } from "./components/Header/Register";
import { Blog } from "./components/Header/Blog";
import HeroSection from "./components/Sections/HeroSection";
import TopDeals from "./components/Sections/TopDeals";
import FlipkartTopDeals from "./components/Sections/FlipkartTopDeals";
import EbayTopDeals from "./components/Sections/EbayTopDeals";
import ProductComparison from "./components/Header/ProductComparison";
import BannerO from "./components/Sections/BannerO";
// import ReviewsSection from "./components/ReviewsSection";
// import Hero from "./components/Hero";
import PriceTrackingSection from "./components/PriceTrackingSection";
import InterestingSection from "./components/IntrestingSection";
// import AdminDashboard from "./components/Admindashboard";

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [showOurStoreComponents, setShowOurStoreComponents] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // New state for authentication

  const handleOurStoreClick = () => {
    setShowOurStoreComponents(true);
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar onSearch={() => setIsSearching(true)} />
                {!isSearching && (
                  <SecondNavbar onOurStoreClick={handleOurStoreClick} />
                )}
                {!isSearching &&
                  (showOurStoreComponents ? (
                    <>
                      <HeroSection />
                      <PriceTrackingSection />
                      <TopDeals />
                      <InterestingSection />
                      <AmazonTopDeals />
                      <FlipkartTopDeals />
                      <EbayTopDeals />
                      <BannerO />
                    </>
                  ) : (
                    <>
                      <HeroSection />
                      {/* <PriceTrackingSection /> */}
                      <InterestingSection />
                      <BannerO />
                      {/* <TopDeals /> */}
                    </>
                  ))}
                <Footer />

                {/* <Navbar onSearch={() => setIsSearching(true)} />
                {!isSearching && (
                  <SecondNavbar onOurStoreClick={handleOurStoreClick} />
                )}
                {!isSearching && !showOurStoreComponents && <HeroSection />}
                {!isSearching && showOurStoreComponents && (
                  <PriceTrackingSection />
                )}
                {!isSearching && showOurStoreComponents && <TopDeals />}
                {!isSearching && !showOurStoreComponents && (
                  <InterestingSection />
                )}
                {!isSearching && showOurStoreComponents && <AmazonTopDeals />}
                {!isSearching && showOurStoreComponents && <FlipkartTopDeals />}
                {!isSearching && showOurStoreComponents && <EbayTopDeals />}
                {!isSearching && !showOurStoreComponents && <BannerO />}
                <Footer /> */}

                {/* <Navbar onSearch={() => setIsSearching(true)} />
                {!isSearching && <SecondNavbar />}
                {!isSearching && <HeroSection />}
                {!isSearching && <PriceTrackingSection />}
                {!isSearching && <TopDeals />}
                {!isSearching && <InterestingSection />}
                {!isSearching && <AmazonTopDeals />}
                {!isSearching && <FlipkartTopDeals />}
                {!isSearching && <EbayTopDeals />}
                {!isSearching && <BannerO/>} */}
                {/* <ReviewsSection/> */}
                {/* <Hero/> */}
                {/* <Footer /> */}
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Register onRegister={handleRegister} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/compare/:name" element={<ProductComparison />} />
          <Route path="/amazon-top-deals" element={<AmazonTopDeals />} />
          {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
















// App.jsx
// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios";

// import Navbar from "./components/Header/Navbar";
// import SecondNavbar from "./components/Header/SecondNavbar";
// import AmazonTopDeals from "./components/Sections/AmazonTopDeals";
// import Footer from "./components/Sections/Footer";
// import { Contact } from "./components/Header/Contact";
// import { Register } from "./components/Header/Register";
// import { Blog } from "./components/Header/Blog";
// import HeroSection from "./components/Sections/HeroSection";
// import TopDeals from "./components/Sections/TopDeals";
// import FlipkartTopDeals from "./components/Sections/FlipkartTopDeals";
// import EbayTopDeals from "./components/Sections/EbayTopDeals";
// import ProductComparison from "./components/Header/ProductComparison";
// import BannerO from "./components/Sections/BannerO";
// import PriceTrackingSection from "./components/PriceTrackingSection";
// import InterestingSection from "./components/IntrestingSection";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isSearching, setIsSearching] = useState(false);
//   const [showOurStoreComponents, setShowOurStoreComponents] = useState(false);

//   const handleOurStoreClick = () => {
//     setShowOurStoreComponents(true);
//   };

//   const handleRegister = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               isAuthenticated ? (
//                 <>
//                   <Navbar onSearch={() => setIsSearching(true)} />
//                   {!isSearching && (
//                     <SecondNavbar onOurStoreClick={handleOurStoreClick} />
//                   )}
//                   {!isSearching && showOurStoreComponents ? (
//                     <>
//                       <HeroSection />
//                       <PriceTrackingSection />
//                       <TopDeals />
//                       <InterestingSection />
//                       <AmazonTopDeals />
//                       <FlipkartTopDeals />
//                       <EbayTopDeals />
//                       <BannerO />
//                     </>
//                   ) : (
//                     <>
//                       <HeroSection />
//                       <InterestingSection />
//                       <BannerO />
//                     </>
//                   )}
//                   <Footer />
//                 </>
//               ) : (
//                 <Register onRegister={handleRegister} />
//               )
//             }
//           />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Register onRegister={handleRegister} />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route
//             path="/compare/:name"
//             element={<ProductComparison />}
//           />
//           <Route
//             path="/amazon-top-deals"
//             element={<AmazonTopDeals />}
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;













