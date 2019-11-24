import axios from 'axios';
// import { parseCookies } from 'nookies';
import config from '../../config';

// const cookies = new parseCookies();
// console.log({cookies, publicRuntimeConfig});

const getPosts = () =>
  axios.get(`${config.api}/posts`).catch(() => ({
    data: [],
  }));

const getOnePost = ({ id }) =>
  axios.get(`${config.api}/posts/${id}`).catch(() => ({
    data: {},
  }));

export default { getPosts, getOnePost };
