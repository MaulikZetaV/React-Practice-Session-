import React, { useState } from "react";

function FilterOnlyButton() {
  const usersData = [
    { id: 1, name: "Aarav Sharma", role: "Admin", age: 28 },
    { id: 2, name: "Neha Verma", role: "User", age: 22 },
    { id: 3, name: "Rohan Mehta", role: "Manager", age: 35 },
    { id: 4, name: "Priya Singh", role: "User", age: 26 },
    { id: 5, name: "Kunal Patel", role: "Admin", age: 40 },
    { id: 6, name: "Ananya Gupta", role: "User", age: 24 },
    { id: 7, name: "Vikram Rao", role: "Manager", age: 38 },
    { id: 8, name: "Simran Kaur", role: "User", age: 21 },
    { id: 9, name: "Rahul Khanna", role: "Admin", age: 45 },
    { id: 10, name: "Pooja Malhotra", role: "User", age: 29 }
  ];

  const [filteredUsers, setFilteredUsers] = useState(usersData);

  const ageAbove30 = () => {
    setFilteredUsers(usersData.filter(user => user.age > 30));
  };

  const ageBelow30 = () => {
    setFilteredUsers(usersData.filter(user => user.age < 30));
  };

  const onlyUsers = () => {
    setFilteredUsers(usersData.filter(user => user.role === "User"));
  };

  const onlyAdmins = () => {
    setFilteredUsers(usersData.filter(user => user.role === "Admin"));
  };

  const onlyManagers = () => {
    setFilteredUsers(usersData.filter(user => user.role === "Manager"));
  };

  const resetFilters = () => {
    setFilteredUsers(usersData);
  };

  return (
    <div>
      <h4>Task 5: Filter Using Buttons</h4>

      <button onClick={ageAbove30}>Age Above 30</button>
      <button onClick={ageBelow30}>Age Below 30</button>
      <button onClick={onlyUsers}>Users</button>
      <button onClick={onlyAdmins}>Admins</button>
      <button onClick={onlyManagers}>Managers</button>
      <button onClick={resetFilters}>Reset</button>

      <ul>
        {filteredUsers.length === 0 ? (
          <p>No users found</p>
        ) : (
          filteredUsers.map(user => (
            <li key={user.id}>
              {user.name} 
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default FilterOnlyButton;
