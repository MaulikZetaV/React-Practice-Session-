import React, { useState } from 'react';

function SingleSearch() {
  const usersData = [
    { id: 1, name: "Aarav", email: "aarav@gmail.com", role: "Admin", age: 28 },
    { id: 2, name: "Neha", email: "neha@gmail.com", role: "User", age: 22 },
    { id: 3, name: "Rohan", email: "rohan@gmail.com", role: "Manager", age: 35 },
    { id: 4, name: "Priya", email: "priya@gmail.com", role: "User", age: 26 },
    { id: 5, name: "Kunal", email: "kunal@gmail.com", role: "Admin", age: 40 }
  ];

  const [search, setSearch] = useState("");

  const searchhandler = usersData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
        <h4>Task 1:Single search</h4>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search user..."
      />

      <ul>
        {searchhandler.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SingleSearch;
