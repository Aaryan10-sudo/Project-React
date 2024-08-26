import axios from "axios";
import React, { useState } from "react";

const CreateBike = () => {
  let [bikeCompany, setBikeCompany] = useState("");
  let [model, setModel] = useState("");
  let [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      bikeCompany: bikeCompany,
      model: model,
      price: price,
    };
    try {
      let result = await axios({
        url: "http://localhost:5000/bike",
        method: "POST",
        data: data,
      });
      console.log(result);
    } catch (error) {}
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>BikeCompany</label>
          <br />
          <input
            type="text"
            value={bikeCompany}
            onChange={(e) => {
              setBikeCompany(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Model</label>
          <br />
          <input
            type="text"
            value={model}
            onChange={(e) => {
              setModel(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Price</label>
          <br />
          <input
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default CreateBike;
