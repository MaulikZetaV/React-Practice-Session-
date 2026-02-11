import { mockItems } from "./mockData";

export const fetchItems = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockItems);
    }, 600);
  });
};

export const addItem = async (data) => {
  return {
    id: Date.now(),
    ...data,
    author: "Admin User"
  };
};

export const deleteItem = async (id) => {
  return true;
};
