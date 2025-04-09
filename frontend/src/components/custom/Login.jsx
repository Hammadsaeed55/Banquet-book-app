// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false); // State for loader
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); 

//     try {
//       const res = await axios.post(`http://localhost:8080/api/auth/login`, {
//         email: email,
//         password: password
//       });

//       toast.success(res.data.message);
      
//       // Store token in localStorage
//       localStorage.setItem('token', res.data.token);
      
//       setTimeout(() => {
//         setLoading(false);  // Hide loader
//         navigate("/");  // Redirect to home page
//       }, 2000);

//     } catch (err) {
//       console.log(err);
//       toast.error(err.response?.data?.message || "Something went wrong");
//       setLoading(false);  // Hide loader on error
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50 dark:bg-black">
//       <div className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
//         <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
//           Login
//         </h2>

//         {/* Show spinner only when logging in */}
//         {loading ? (
//           <div className="flex justify-center">
//             <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//           </div>
//         ) : (
//           <>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="email@example.com"
//                   className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="********"
//                   className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors font-semibold"
//               >
//                 Log In
//               </button>
//             </form>

//             {/* Hide "Don't have an account?" message when loading */}
//             {!loading && (
//               <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
//                 Don't have an account? <Link to="/SignUp" className="underline">Sign Up</Link>
//               </p>
//             )}
//           </>
//         )}
//       </div>
//       <ToastContainer position="top-center" autoClose={1000} />
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/AuthSlice"; // update path if needed

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`http://localhost:8080/api/auth/login`, {
        email: email,
        password: password,
      });

      toast.success(res.data.message);

      localStorage.setItem("token", res.data.token);
      dispatch(login(res.data.token));

      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 2000);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50 dark:bg-black">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Login
        </h2>

        {loading ? (
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors font-semibold"
              >
                Log In
              </button>
            </form>

            {!loading && (
              <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
                Don't have an account? <Link to="/SignUp" className="underline">Sign Up</Link>
              </p>
            )}
          </>
        )}
      </div>
      <ToastContainer position="top-center" autoClose={1000} />
    </div>
  );
};

export default Login;

