import axios from "axios";
import React, { useState } from "react";

const CreateTeacher = () => {
  let [teacherName, setTeacherName] = useState("");
  let [position, setPosition] = useState("");
  let [salary, setSalary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      teacherName: teacherName,
      position: position,
      salary: salary,
    };
    try {
      let result = await axios({
        url: "http://localhost:5000/teacher",
        method: "POST",
        data: data,
      });
    } catch (error) {}
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Teacher Name</label>
          <br />
          <input
            type="text"
            value={teacherName}
            onChange={(e) => {
              setTeacherName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Position</label>
          <br />
          <input
            type="text"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Salary</label>
          <br />
          <input
            type="number"
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default CreateTeacher;
