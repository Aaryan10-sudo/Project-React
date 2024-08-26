import axios from "axios";
import React, { useState } from "react";

const CreateBook = () => {
  let [bookTitle, setBookTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      bookTitle: bookTitle,
      author: author,
      price: price,
    };
    try {
      let result = await axios({
        url: "http://localhost:5000/book/",
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
          <label>BookTitle</label>
          <br />
          <input
            type="text"
            value={bookTitle}
            onChange={(e) => {
              setBookTitle(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Author</label>
          <br />
          <input
            type="text"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
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

export default CreateBook;
