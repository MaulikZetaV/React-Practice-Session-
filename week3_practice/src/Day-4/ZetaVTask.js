import React, { useState } from "react";

function UserSearchTask() {
  const users = ["Alice", "Bob", "Charlie", "David"];
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(user =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h4>Search Users Task</h4>

      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {search && filteredUsers.length === 0 && (
        <p>No result</p>
      )}

      {filteredUsers.length > 0 && (
        <ul>
          {filteredUsers.map(user => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserSearchTask;
