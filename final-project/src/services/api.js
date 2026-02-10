const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};


export const addUser = async (user) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

export const updateUser = async (id, user) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to update user");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating user:", error);
    throw error; // IMPORTANT: rethrow so React can catch it
  }
};

export const deleteUser = async (id) => {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
