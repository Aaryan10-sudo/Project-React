import axios from "axios";
import React, { useState } from "react";

const CreateDepartment = () => {
  let [departmentName, setDepartmentName] = useState("");
  let [address, setAddress] = useState("");
  let [members, setMembers] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      departmentName: departmentName,
      address: address,
      members: members,
    };
    try {
      let result = await axios({
        url: "http://localhost:5000/department",
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
          <label>Department Name</label>
          <br />
          <input
            type="text"
            value={departmentName}
            onChange={(e) => {
              setDepartmentName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Address</label>
          <br />
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Members</label>
          <br />
          <input
            type="number"
            value={members}
            onChange={(e) => {
              setMembers(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default CreateDepartment;
