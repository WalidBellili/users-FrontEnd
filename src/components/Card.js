const Card = ({ users }) => {
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
                  <p>{user.name}</p>
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
