import { Link } from "react-router-dom";

const Users = ({ user }) => {
  console.log(user.slug);
  return (
    <Link to={`/users/${user.slug}`}>
      <div className="h-full border">
        <img src={user.profile_picture} alt="" width={300} height={230} />
        <p>{user.name}</p>
      </div>
    </Link>
  );
};

export default Users;
