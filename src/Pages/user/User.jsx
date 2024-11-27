import { Link } from "react-router-dom";
import data from "../../data/userData";

const User = () => {
  return (
    <div className="user">
      {data.map((d) => (
        <Link key={d.id} to={d.id.toString()}>
          {d.name}
        </Link>
      ))}
    </div>
  );
};

export default User;
