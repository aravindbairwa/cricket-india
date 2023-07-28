import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:3000/', // Replace this with your actual API base URL
  timeout: 10000, // Set the request timeout in milliseconds (optional)
  // You can also add default headers or other configurations here if needed
});

export default instance;
