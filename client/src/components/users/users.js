import "./users.css";
import { useState, useEffect } from "react";

function UserList() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetch("/express_backend")
      .then((res) => res.json())
      .then((usersFetched) => {
        setUsersList(usersFetched);
      });
  }, [usersList]);

  return (
    <div>
      <h3>The following list of users fetched from backend say Hi to you!</h3>
      <ul>
        {usersList.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} {user.profile}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
