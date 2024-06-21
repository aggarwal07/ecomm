// "use client";
// import React from "react";
// import { useEffect, useState } from "react";
// import Profile from "./user/Profile";
// import Orders from "./user/Orders";
// import { FaRegUserCircle } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";


// const User = () => {
//   const [page, setPage] = useState(0);
//   const pages = [
//     { title: "User Profile", page: <Profile />,logo:<FaRegUserCircle size={30} /> },
//     { title: "Orders", page: <Orders />,logo:<IoCartOutline size={30} /> },
//   ];
//   return (
//     <div className="w-[97vw] lg:w-[60em] mx-auto text-white p-5 flex max-sm:flex-col max-sm:items-center">
//       <div className="w-fit p-5 flex sm:flex-col max-sm:gap-[1.5vw]">
//         {pages.map((item, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setPage(index);
//             }}
//             style={{
//               boxShadow: "0px 5px 9px rgba(255, 0, 0, 0.5)",
//             }}
//             className={`my-2 rounded-xl w-[10em] sm:w-[12em] h-[3.5em] flex items-center justify-center gap-[0.5vw] text-center uppercase font-bold  ${page===index?"text-black bg-white":"text-white bg-black"}`}
//           >
//             {item.logo}
//             {item.title}
//           </button>
//         ))}
//       </div>
//       <div className="p-5 w-full">{pages[page].page}</div>
//     </div>
//   );
// };

// export default User;
