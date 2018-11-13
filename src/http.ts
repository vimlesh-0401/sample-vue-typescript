import axios from 'axios';
/**
 * Move these configurations to evn specific files.
 */
const config = {
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL: process.env.baseURL,
  CLIENT: {
    scope: '"user"',
    client_id: process.env.client_id,
    client_secret: process.env.client_secret,
  },
};

// TODO read from env variables
export const CLIENT = config.CLIENT;

export const HTTP = axios.create({
  baseURL: config.BASE_URL,
});
