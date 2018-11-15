import axios from 'axios';

const config = {
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL: process.env.VUE_APP_BASE_URL,
  CLIENT: {
    SCOPE: process.env.VUE_APP_SCOPE,
    CLIENT_ID: process.env.VUE_APP_CLIENT_ID,
    CLIENT_SECRET: process.env.VUE_APP_CLIENT_SECRET,
  },
};

// TODO read from env variables
export const CLIENT = config.CLIENT;

export const HTTP = axios.create({
  baseURL: config.BASE_URL,
});
