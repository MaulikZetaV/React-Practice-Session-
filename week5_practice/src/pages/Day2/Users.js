import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Maulik", role: "Trainee", company: "Zeta-V Technology" },
  { id: 2, name: "Manav", role: "Intern", company: "Zeta-V Technology" },
  { id: 3, name: "Chaitanaya", role: "Full Stack Developer", company: "Zeta-V Technology" },
  { id: 4, name: "Aniket", role: "Flutter Developer", company: "Zeta-V Technology" },
  { id: 5, name: "Sandali", role: "Trainee", company: "Zeta-V Technology" },
  { id: 6, name: "Anagha", role: "Accountant", company: "Zeta-V Technology" },
  { id: 7, name: "Rashmi", role: "Business Central Administrator", company: "Zeta-V Technology" }
];

function Users() {
  return (
    <div>
      <h3>Users List</h3>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`}>
              {user.name} – {user.role} ({user.company})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
