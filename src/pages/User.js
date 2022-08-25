import Card from "../components/Card";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

  const { slug } = useParams();
  console.log(slug);
  useEffect(() => {
    fetchDataUsers();
  }, [slug]);

  const fetchDataUsers = async () => {
    const request = await fetch(`http://localhost:5000/users/${slug}`);
    const response = await request.json();
    setUsers(response);
  };
  console.log(users);
  //   if (users) {
  //     return <div>loading</div>;
  //   }
  return <div>
    
  </div>;
};

export default User;
