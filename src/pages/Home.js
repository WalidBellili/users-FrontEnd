import { useEffect, useState } from "react";


const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchDataUsers();
  }, []);

  const fetchDataUsers = async () => {
    const request = await fetch("http://localhost:5000/users");
    const response = await request.json();
    setUsers(response);
  };
  //   console.log(users);
  return (
    <div>
      
    </div>
  );
};

export default Home;
