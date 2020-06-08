/**
 * 작성자: 이세희
 * 작성일: 2020.06.08
 * 파일명: api.js
 * API를 호출하는 모듈
 */

import axios from 'axios';

export const getPost = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);
