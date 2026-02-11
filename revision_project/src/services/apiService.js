import httpClient from "./httpClient";

const BASE_URL = "https://jsonplaceholder.typicode.com";


export const fetchUsers = () => {
  return httpClient(`${BASE_URL}/users`);
};

export const fetchPosts = () => {
  return httpClient(`${BASE_URL}/posts`);
};
