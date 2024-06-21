// "use client";
// import React from "react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import User from "./User";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { setErrors, setUser } from "@/store/slices/auth";

// const Auth = () => {
//   // const user = useAppSelector((state) => state.auth.user);
//   // if (user){
//   //     return (
//   //       <div>
//   //         <User/>
//   //       </div>
//   //     )
//   //   }
//   const router = useRouter();
//   const dispatch = useAppDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         `https://backendfiggle.onrender.com/api/accounts/${email}/${password}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         // Handle successful login, e.g., set user state or redirect
//         console.log("Login successful", data);
//         dispatch(setUser(data));
//         router.back();
//       } else {
//         const { message } = await response.json();
//         setErrors(message);
//         setError(message);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setErrors("An error occurred. Please try again later.");
//       setError("An error occurred. Please try again later.");
//     }
//   };
//   return (
//     <div className="flex items-center justify-center">
//       <div className="max-w-md w-full p-6rounded-lg shadow-md">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-white"
//             >
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-white"
//             >
//               Password:
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded-md"
//           >
//             Login
//           </button>
//         </form>
//         {error && <p className="text-red-500 mt-4">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default Auth;
