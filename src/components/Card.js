import { Link } from "react-router-dom";

const Card = ({ users }) => {
  console.log(users.slug);
  return (
    <div>
      <section>
        <ul>
          <li className="flex gap-5">
            {users.map((user) => {
              return (
                <div className="">
                  <img
                    src={user.profile_picture}
                    alt=""
                    width={300}
                    height={230}
                  />
                  <Link to={`/users/${users.slug}`}>
                    <p>{user.name}</p>
                  </Link>
                </div>
              );
            })}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Card;
