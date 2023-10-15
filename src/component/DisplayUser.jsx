import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const DisplayUser = () => {
  const users = useLoaderData();

  const [updatedUser, setUpdatedUser] = useState(users);
  console.log(updatedUser);
  //   useEffect(()=>{
  //     fetch()
  //   },[])
  console.log(users);

  const handleDelete = (_id) => {
    console.log(_id);
    // const URL = `http://localhost:5001/users/${_id}`;
    fetch(`http://localhost:5001/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Data deleted successfully");
        }
        const filteredData = updatedUser.filter((item) => item._id !== _id);
        setUpdatedUser(filteredData);
      });
  };
  return (
    <div>
      <h2>User: {updatedUser.length}</h2>
      {updatedUser.map((user) => (
        <div key={user._id}>
          <h1>{user.name}</h1>
          <br />
          <button onClick={() => handleDelete(user._id)} type="submit">
            Delete
          </button>
          <Link to={`/users/${user._id}`}>
            <button type="submit">UPDATE</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DisplayUser;
