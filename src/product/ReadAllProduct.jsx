import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReadAllProduct = () => {
  let [product, setProduct] = useState([]);
  let navigate = useNavigate();
  const getAllData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:5000/product`,
        method: "GET",
      });
      setProduct(result.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = async (_id) => {
    try {
      let result = await axios({
        url: `http://localhost:5000/product/${_id}`,
        method: "DELETE",
      });
      console.log(result);
    } catch (error) {}
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {product.map((value, index) => {
        return (
          <div
            key={index}
            style={{
              marginTop: "10px",
              border: "2px solid black",
              paddingTop: "20px",
              paddingLeft: "20px",
              borderRadius: "20px",
            }}
          >
            <div>Product Name is : {value.productName}</div>
            <div>Product Quantity is: {value.quantity}</div>
            <div>Product Price is : {value.price}</div>
            <button
              style={{ margin: "10px", cursor: "pointer" }}
              onClick={() => {
                navigate(`/product/${value._id}`);
              }}
            >
              View
            </button>
            <button
              style={{ margin: "10px", cursor: "pointer" }}
              onClick={() => {
                navigate(`/product/update/${value._id}`);
              }}
            >
              Edit
            </button>
            <button
              style={{ margin: "10px", cursor: "pointer" }}
              onClick={() => {
                handleDelete(value._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllProduct;
