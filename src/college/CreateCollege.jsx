import axios from "axios";
import React, { useState } from "react";

const CreateCollege = () => {
  let [collegeName, setCollegeName] = useState("");
  let [affiliatedUniversity, setAffiliatedUniversity] = useState("");
  let [establishedYear, setEstablishedYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      collegeName: collegeName,
      affiliatedUniversity: affiliatedUniversity,
      establishedYear: establishedYear,
    };
    try {
      let result = await axios({
        url: "http://localhost:5000/college",
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
          <label>College Name</label>
          <br />
          <input
            type="text"
            value={collegeName}
            onChange={(e) => {
              setCollegeName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Affililated University</label>
          <br />
          <input
            type="text"
            value={affiliatedUniversity}
            onChange={(e) => {
              setAffiliatedUniversity(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Established Year</label>
          <br />
          <input
            type="date"
            value={establishedYear}
            onChange={(e) => {
              setEstablishedYear(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default CreateCollege;
