import axios from "axios";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const CreateTrainee = () => {
  let [traineeName, setTraineeName] = useState("");
  let [course, setCourse] = useState("");
  let [fee, setFee] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      traineeName: traineeName,
      course: course,
      fee: fee,
    };
    try {
      let result = await axios({
        url: "http://localhost:5000/trainee",
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
          <label>Trainee Name</label>
          <br />
          <input
            type="text"
            value={traineeName}
            onChange={(e) => {
              setTraineeName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Course</label>
          <br />
          <input
            type="text"
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Fee</label>
          <br />
          <input
            type="number"
            value={fee}
            onChange={(e) => {
              setFee(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default CreateTrainee;
