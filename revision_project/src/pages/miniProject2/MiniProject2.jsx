import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import SearchBar from "./SearchBar";
import UserList from "./UserList";

const MiniProject2 = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [search, setSearch] = useState("");

  const filteredUsers =
    data?.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <div className="project-page">
      <div className="project-container">
        <div className="project-header">
          <h2>Mini Project 2</h2>
          <p>API data fetching with search and error handling</p>
        </div>

        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading && <p>Loading users...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && <UserList users={filteredUsers} />}
      </div>
    </div>
  );
};

export default MiniProject2;
