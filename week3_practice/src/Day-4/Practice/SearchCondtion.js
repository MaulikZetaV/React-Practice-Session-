import React, { useState } from "react";

function SearchCondtion() {

  const usersData = [
    { id: 1, name: "Aarav", email: "aarav@gmail.com", role: "Admin", age: 28 },
    { id: 2, name: "Neha", email: "neha@gmail.com", role: "User", age: 22 },
    { id: 3, name: "Rohan", email: "rohan@gmail.com", role: "Manager", age: 35 },
    { id: 4, name: "Priya", email: "priya@gmail.com", role: "User", age: 26 },
    { id: 5, name: "Kunal", email: "kunal@gmail.com", role: "Admin", age: 40 }
  ];

  const [search, setSearch] = useState("");

  const handler = usersData
    .filter(user => user.role === "User")
    .filter(user =>
      search === "" ||
      user.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
      <h4>Task 3: Search with Condition + Empty Handling (Combined)</h4>

      <input
        type="text"
        placeholder="Search user name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {handler.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {handler.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchCondtion;
