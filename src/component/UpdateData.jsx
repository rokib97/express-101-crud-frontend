import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateData = () => {
  const singleData = useLoaderData();
  console.log(singleData);
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const updateData = {
      name,
      email,
      password,
    };
    console.log(updateData);

    // fetch(`http://localhost:5001/users/${singleData._id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(updateData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    axios
      .put(`http://localhost:5001/users/${singleData._id}`, updateData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Updated: </h1>
      <form onSubmit={handleUpdate} action="">
        <input type="text" defaultValue={singleData?.name} name="name" id="" />
        <br />
        <input
          type="email"
          defaultValue={singleData?.email}
          name="email"
          id=""
        />
        <br />
        <input
          type="password"
          name="password"
          defaultValue={singleData?.password}
          id=""
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateData;
