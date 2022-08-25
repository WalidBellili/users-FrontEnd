import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[50px] flex justify-around">
      <nav className="w-full flex justify-around items-center">
        <Link to="/">Home</Link>
        {/* <Link to="/users">User</Link> */}
        <Link to="/createUser">Create</Link>
      </nav>
    </header>
  );
};

export default Header;
