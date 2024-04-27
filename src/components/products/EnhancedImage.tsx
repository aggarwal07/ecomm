// import { enhanceImage } from '@/app/api/image/ImageEnhancer';
// import React from 'react'
// import { useEffect,useState } from 'react';

// const EnhancedImage = () => {
//   const [images, setImages] = useState("");
//     useEffect(() => {
//         // Call the enhanceImage function
//         enhanceImage()
//           .then(data => {
//             console.log('Enhanced image data:', data);
//             setImages(data.result_url);
//           })
//           .catch(error => {
//             console.error('Error enhancing image:', error.message);
//           });
//       }, []);
//   return (
//     <div>
//       <h1>the images is below</h1>
//       <img src={images} alt="" />
//     </div>
//   )
// }

// export default EnhancedImage
