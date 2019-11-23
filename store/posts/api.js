import axios from 'axios';
// import { parseCookies } from 'nookies';
const getConfig = require('next/config');
// const { serverRuntimeConfig } = getConfig.default();

// const cookies = new parseCookies();
// console.log({cookies, publicRuntimeConfig});

const getPosts = () =>
  axios.get(`https://jsonplaceholder.typicode.com/posts`).catch(() => ({
    data: [],
  }));

const getOnePost = ({ id }) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).catch(() => ({
    data: {},
  }));

export default { getPosts, getOnePost };
