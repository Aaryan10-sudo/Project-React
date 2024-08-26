import axios from "axios";
import React, { useState } from "react";

const CreateStudent = () => {
  let [studentName, setStudentName] = useState("");
  let [grade, setGrade] = useState("");
  let [fee, setFee] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      studentName: studentName,
      grade: grade,
      fee: fee,
    };
    try {
      let result = await axios({
        url: "http://localhost:5000/students",
        method: "POST",
        data: data,
      });
    } catch (error) {}
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>STUDENT NAME:</label>
          <br />
          <input
            type="text"
            value={studentName}
            onChange={(e) => {
              setStudentName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Grade:</label>
          <br />
          <input
            type="text"
            value={grade}
            onChange={(e) => {
              setGrade(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Fee:</label>
          <br />
          <input
            type="number"
            value={fee}
            onChange={(e) => {
              setFee(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default CreateStudent;
