const axios = require('axios');

const BASE_URL = process.env.NODE_ENV == 'production' ? 'realwebsite.com' : 'http://localhost:8000';

const ax = axios.create({
    baseURL: BASE_URL,
    // some more nice things.
})


ax.interceptors.response.use((res) => { 
    console.log(res);
    // Important: response interceptors **must** return the response.
    return res;
  }),
    ax.interceptors.request.use((req) => {
      console.log(`${req.method} ${req.url}`);
      // Important: request interceptors **must** return the request.
      return req;
    });


    module.exports = ax;