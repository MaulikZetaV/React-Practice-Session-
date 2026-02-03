import { useParams, Link } from "react-router-dom";

const users = [
  { id: 1, name: "Maulik", role: "Trainee", company: "Zeta-V Technology" },
  { id: 2, name: "Manav", role: "Intern", company: "Zeta-V Technology" },
  { id: 3, name: "Chaitanaya", role: "Full Stack Developer", company: "Zeta-V Technology" },
  { id: 4, name: "Aniket", role: "Flutter Developer", company: "Zeta-V Technology" },
  { id: 5, name: "Sandali", role: "Trainee", company: "Zeta-V Technology" },
  { id: 6, name: "Anagha", role: "Accountant", company: "Zeta-V Technology" },
  { id: 7, name: "Rashmi", role: "Business Central Administrator", company: "Zeta-V Technology" }
];

function UserDetails() {
  const { userId } = useParams();

  const user = users.find((u) => u.id === Number(userId));

  if (!user) {
    return <h3>User not found</h3>;
  }

  return (
    <div>
      <h3>User Details</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Company:</strong> {user.company}</p>

      <Link to="profile">View Profile</Link>
    </div>
  );
}

export default UserDetails;
