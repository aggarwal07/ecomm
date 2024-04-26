// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ImageGen = () => {
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const response = await axios.post('/api/ImageGen'); // Request to the local API route
//         const imageUrl = response.data.output.url;
//         setImageUrl(imageUrl);
//       } catch (error) {
//         console.error('Error fetching image:', error);
//       }
//     };

//     fetchImage();
//   }, []); // Run only once on component mount

//   return (
//     <div>
//       {imageUrl && <img src={imageUrl} alt="Generated Image" />}
//     </div>
//   );
// };

// export default ImageGen;
