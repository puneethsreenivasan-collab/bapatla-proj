import React, { useState } from "react";
import "../../styles/CreateProduct.css";
import axios from "axios";
const CreateProduct = () => {
  let Product_url = "http://localhost:5000/Products";

  let [ProductName, SetProductName] = useState("");
  let [ProductPrice, SetProductPrice] = useState("");
  let [ProductImg, SetProductImg] = useState("");
  let [ProductDescription, SetProductDescription] = useState("");
  let [ProductRating, SetProductRating] = useState("");

  let Product = {
    ProductName,
    ProductPrice,
    ProductImg,
    ProductDescription,
    ProductRating,
  };

  const CreateProduct = (x) => {
    x.preventDefault();
    // validation
    axios
      .post(Product_url, Product)
      .then((res) => {
        alert("Product Created Successfully");
      })
      .catch((err) => {
        alert("unable to create Product Please Try Again");
      });
  };

  return (
    <div className="CreateProduct-container">
      <h2>CreateProduct </h2>

      <form action="" className="CreateProduct-from" onSubmit={CreateProduct}>
        <div class="form-group">
          <label for="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(x) => SetProductName(x.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="Price">Product Price</label>
          <input
            type="Price"
            id="Price"
            name="Price"
            onChange={(x) => SetProductPrice(x.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="Img">Product Image</label>
          <input
            type="url"
            id="img"
            name="img"
            onChange={(x) => SetProductImg(x.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="Description">Product Description</label>
          <textarea
            type=""
            id="Description"
            name="Description"
            rows={5}
            onChange={(x) => SetProductDescription(x.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="Rating">Product Rating</label>
          <input
            type="range"
            id="img"
            name="img"
            min="1"
            max="5"
            onChange={(x) => SetProductRating(x.target.value)}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CreateProduct;
