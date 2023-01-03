import React from "react";
import { addToCart, removeFromCart } from "../../utilities/manageDB";

const SingleData = (props) => {
  let { name, email, gender, _id } = props.item;
  const handleAdd = (id) => {
    addToCart(id);
  };
  const handleRemove = (id) => {
    removeFromCart(id);
  };
  return (
    <div style={{ maxWidth: "400px", border: "2px solid black", padding: "9px", margin: "12px" }}>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Gender: {gender}</p>
      <p>ID: {_id}</p>
      <button onClick={() => handleAdd(_id)}>Add To DB</button>
      <button onClick={() => handleRemove(_id)}>Remove From DB</button>
    </div>
  );
};

export default SingleData;
