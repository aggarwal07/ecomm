// import axios, { AxiosResponse } from 'axios';

// interface RequestData {
//   enhancements: string[];
//   url: string;
//   width: number;
// }

// const enhanceImage = async (): Promise<any> => {
//   try {
//     // API endpoint
//     const apiUrl: string = 'https://deep-image.ai/rest_api/process_result';

//     // Request headers
//     const headers: Record<string, string> = {
//       'Content-Type': 'application/json',
//       'X-API-Key': '63bd9820-0427-11ef-a042-fb2451a72aca', // Replace 'API_KEY' with your actual API key
//     };

//     // Request data
//     const requestData: RequestData = {
//       enhancements: ['denoise', 'deblur', 'light'],
//       url: 'https://deep-image.ai/api-example.png',
//       width: 2000,
//     };

//     // Make POST request using Axios
//     const response: AxiosResponse<any> = await axios.post(apiUrl, requestData, { headers });
//     return response.data;
//   } catch (error:any) {
//     throw new Error(error.message);
//   }
// };

// export { enhanceImage };