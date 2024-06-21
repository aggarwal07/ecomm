// 'use client'
// import React, { useState } from 'react'
// import SignUp from './SignUp';
// import Auth from './Auth';

// const SignIn = () => {
//     const [option,setOption] = useState(false);
//   return (
//     <div className='w-[97vw] lg:w-[60em] mx-auto'>
//       <div className='flex w-fit mx-auto'>
//         <p onClick={()=>{setOption(false)}} className={`p-1 font-bold text-3xl ${option?"text-gray-700":"border-b-2 text-white"} cursor-pointer`}>Sign In</p>
//         <p className='mx-2 font-bold text-3xl text-gray-700'>/</p>
//         <p onClick={()=>{setOption(true)}} className={`p-1 font-bold text-3xl ${option?"border-b-2 text-white":"text-gray-700"} cursor-pointer`}> Sign Up</p>
//       </div>
//       <div className='mt-10'>

//       {option?<SignUp/>:<Auth/>}
//       </div>
//     </div>
//   )
// }

// export default SignIn
