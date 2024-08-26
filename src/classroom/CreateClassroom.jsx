import axios from "axios";
import React, { useState } from "react";

const CreateClassroom = () => {
  let [grade, setGrade] = useState("");
  let [numberOfStudents, setNumberOfStudents] = useState("");
  let [numberOfTeachers, setNumberOfTeachers] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      grade: grade,
      numberOfStudents: numberOfStudents,
      numberOfTeachers: numberOfTeachers,
    };
    try {
      let result = await axios({
        url: "http://localhost:5000/classroom/",
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
          <label>Grade</label>
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
          <label>Number Of Students</label>
          <br />
          <input
            type="number"
            value={numberOfStudents}
            onChange={(e) => {
              setNumberOfStudents(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Number Of Teachers</label>
          <br />
          <input
            type="number"
            value={numberOfTeachers}
            onChange={(e) => {
              setNumberOfTeachers(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default CreateClassroom;
