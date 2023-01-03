import React, { useEffect, useState } from "react";
import SingleData from "../singleData/SingleData";

const ShowAllData = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json").then((res) => res.json().then((d) => setData(d)));
  }, []);
  return (
    <div>
      <h2>Show All Data From Fake DB</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {data.map((item) => (
          <SingleData item={item} key={item._id}></SingleData>
        ))}
      </div>
    </div>
  );
};

export default ShowAllData;
