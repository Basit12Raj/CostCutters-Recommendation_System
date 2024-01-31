import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';

// Component for the heading text
const CostCuttersText = () => (
  <div className="text-black text-4xl font-semibold mb-8">
    CostCutters
  </div>
);

export const Register = ({ onRegister }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  // const navigate = useNavigate(); // Get the navigate function from react-router-dom

  // Toggle between Sign Up and Login

  // Toggle between Sign Up and Login
  const toggleMode = () => {
    setIsSignUp((prevMode) => !prevMode);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Handle form data change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation checks for form field
    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match.");
        return;
      }
      // Perform the sign-up operation here
      try {
        const response = await axios.post('http://localhost:3001/users/register', formData); // Replace '/api/register' with your actual sign-up API endpoint
        console.log(response.data); // Handle your response accordingly
        // const username = formData.username; // Use formData.username
        // Redirect to the comparison route with the registered username
        // navigate(`/compare/${encodeURIComponent(username)}`);
        const token = response.data.token; // Assuming your server returns a token
        storeToken(token); // Function to securely store the token on the client side
        // onRegister(); // Call the onRegister function from the App component
        onRegister();
      } catch (error) {
        console.error('An error occurred during registration:', error);
        alert('An error occurred during registration. Please try again.');
      }
    } else {
      // Perform the login operation here
      try {
        const response = await axios.post('http://localhost:3001/users/login', formData); // Replace '/api/login' with your actual login API endpoint
        console.log(response.data); // Handle your response accordingly
      } catch (error) {
        console.error('An error occurred during login:', error);
        alert('An error occurred during login. Please try again.');
      }
    }
  };


  // Function to store the token securely (e.g., in a cookie or local storage)
  const storeToken = (token) => {
    // Example using localStorage (consider more secure options, especially for production)
    localStorage.setItem('authToken', token);
  };


  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <div className="p-8 bg-white rounded-xl shadow-2xl w-96 space-y-8">
        <form onSubmit={handleSubmit}>
          <CostCuttersText />

          {/* Conditional rendering of form fields based on the mode */}
          {isSignUp && (
            <>
              {/* Username field */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-purple-600"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Email field */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-purple-600"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {/* Password field */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="w-full p-3 border rounded-md focus:outline-none focus:border-purple-600"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="absolute right-3 top-3 cursor-pointer" onClick={togglePasswordVisibility}>
              {showPassword ? <EyeOffIcon className="h-6 w-6 text-gray-500" /> : <EyeIcon className="h-6 w-6 text-gray-500" />}
            </div>
          </div>

          {isSignUp && (
            <div className="mb-4">
              {/* Confirm Password field */}
              <label className="block text-gray-700 mb-2">Confirm Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                className="w-full p-3 border rounded-md focus:outline-none focus:border-purple-600"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Submit button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 rounded-md text-white focus:outline-none transform transition hover:scale-105"
              style={{ backgroundColor: isSignUp ? '#8B5CF6' : '#10B981' }}
            >
              {isSignUp ? 'Sign Up' : 'Login'}
            </button>
          </div>

          {/* Mode toggle button */}
          <div>
            <button
              type="button"
              onClick={toggleMode}
              className="w-full py-3 rounded-md text-gray-700 focus:outline-none hover:bg-gray-200"
            >
              {isSignUp ? 'Already have an account? Switch to Login' : 'Need an account? Switch to Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};



















// Register.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';

// const CostCuttersText = () => (
//   <div className="text-black text-4xl font-semibold mb-8">
//     CostCutters
//   </div>
// );

// export const Register = ({ onRegister }) => {
//   const [isSignUp, setIsSignUp] = useState(true);
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const toggleMode = () => {
//     setIsSignUp((prevMode) => !prevMode);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isSignUp) {
//       if (formData.password !== formData.confirmPassword) {
//         alert("Passwords don't match.");
//         return;
//       }

//       try {
//         const response = await axios.post('http://localhost:3001/users/register', formData);
//         console.log(response.data);
//         const token = response.data.token;
//         storeToken(token);
//         onRegister(); // Notify the parent component that registration is successful
//       } catch (error) {
//         console.error('An error occurred during registration:', error);
//         alert('An error occurred during registration. Please try again.');
//       }
//     } else {
//       try {
//         const response = await axios.post('http://localhost:3001/users/login', formData);
//         console.log(response.data);
//       } catch (error) {
//         console.error('An error occurred during login:', error);
//         alert('An error occurred during login. Please try again.');
//       }
//     }
//   };

//   const storeToken = (token) => {
//     localStorage.setItem('authToken', token);
//     localStorage.setItem('isAuthenticated', 'true'); // Set user as authenticated
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
//       <div className="p-8 bg-white rounded-xl shadow-2xl w-96 space-y-8">
//         <form onSubmit={handleSubmit}>
//           <CostCuttersText />

//           {isSignUp && (
//             <>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Username</label>
//                 <input
//                   type="text"
//                   name="username"
//                   className="w-full p-3 border rounded-md focus:outline-none focus:border-purple-600"
//                   placeholder="Username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="w-full p-3 border rounded-md focus:outline-none focus:border-purple-600"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </>
//           )}

//           <div className="mb-4 relative">
//             <label className="block text-gray-700 mb-2">Password</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               className="w-full p-3 border rounded-md focus:outline-none focus:border-purple-600"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <div className="absolute right-3 top-3 cursor-pointer" onClick={togglePasswordVisibility}>
//               {showPassword ? <EyeOffIcon className="h-6 w-6 text-gray-500" /> : <EyeIcon className="h-6 w-6 text-gray-500" />}
//             </div>
//           </div>

//           {isSignUp && (
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Confirm Password</label>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="confirmPassword"
//                 className="w-full p-3 border rounded-md focus:outline-none focus:border-purple-600"
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           )}

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="w-full py-3 rounded-md text-white focus:outline-none transform transition hover:scale-105"
//               style={{ backgroundColor: isSignUp ? '#8B5CF6' : '#10B981' }}
//             >
//               {isSignUp ? 'Sign Up' : 'Login'}
//             </button>
//           </div>

//           <div>
//             <button
//               type="button"
//               onClick={toggleMode}
//               className="w-full py-3 rounded-md text-gray-700 focus:outline-none hover:bg-gray-200"
//             >
//               {isSignUp ? 'Already have an account? Switch to Login' : 'Need an account? Switch to Sign Up'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };




















