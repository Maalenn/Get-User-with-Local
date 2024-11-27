import { Link, useParams } from "react-router-dom";
import data from "../../data/userData";

const UserDetail = () => {
  const { id } = useParams();
  // we use parseInt(id) it is because id in the user componnet we are already convert it to string but d.id here is the number that why we need to convert it
  const user = data.find((d) => d.id === parseInt(id));
  return (
    <div className="user-detail">
      <h3>User ID: {id}</h3>
      <h3>Name: {user.name}</h3>
      <h3>Username: {user.username}</h3>
      <h3>Email: {user.email}</h3>
      <Link to="/user">Back</Link>
    </div>
  );
};

export default UserDetail;
