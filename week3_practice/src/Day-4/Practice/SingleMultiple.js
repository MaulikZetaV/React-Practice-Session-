import React, { useState } from "react";

function MultipleSearch() {
  const usersData = [
    { id: 1, name: "Aarav", email: "aarav@gmail.com", role: "Admin", age: 28 },
    { id: 2, name: "Neha", email: "neha@gmail.com", role: "User", age: 22 },
    { id: 3, name: "Rohan", email: "rohan@gmail.com", role: "Manager", age: 35 },
    { id: 4, name: "Priya", email: "priya@gmail.com", role: "User", age: 26 },
    { id: 5, name: "Kunal", email: "kunal@gmail.com", role: "Admin", age: 40 }
  ];

  const [search, setSearch] = useState("");

  // Derived filtered data
  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h4>Task 2: Multiple Field Search</h4>

      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MultipleSearch;
