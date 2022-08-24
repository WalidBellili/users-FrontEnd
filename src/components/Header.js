import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between mb-10">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users/:user">Users</Link>
        <Link to="/createUser">Create</Link>
      </nav>
    </header>
  );
};

export default Header;
