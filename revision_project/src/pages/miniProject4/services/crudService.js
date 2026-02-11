export const addItem = (items, text) => {
  return [...items, { id: Date.now(), text }];
};

export const deleteItem = (items, id) => {
  return items.filter((item) => item.id !== id);
};

export const updateItem = (items, id) => {
  return items.map((item) =>
    item.id === id ? { ...item, text: item.text + " (updated)" } : item
  );
};
