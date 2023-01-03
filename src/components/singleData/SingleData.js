import React from "react";

const SingleData = (props) => {
  let { name, email, gender, _id } = props.item;
  return (
    <div style={{ maxWidth: "400px", border: "2px solid black", padding: "9px", margin: "12px" }}>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Gender: {gender}</p>
      <p>ID: {_id}</p>
    </div>
  );
};

export default SingleData;
