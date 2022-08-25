import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

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

  return (
    <main>
      <h1>Random Users</h1>

      <section className="flex justify-center items-center ">
        {users.map((user) => {
          return <Card user={user} />;
        })}
      </section>

      {/* <section>
        <article className="bg-slate-600 flex justify-center h-[500px] w-5/6"></article>
      </section> */}
    </main>
  );
};

export default Home;
