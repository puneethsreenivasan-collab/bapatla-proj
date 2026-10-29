import React from "react";
import "../../styles/CreateProduct.css";
const CreateProduct = () => {
  return (
    <div className="CreateProduct-container">
      <h2>CreateProduct </h2>

      <form action="" className="CreateProduct-from">
        <div class="form-group">
          <label for="name">Product Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div class="form-group">
          <label for="Price">Product Price</label>
          <input type="Price" id="Price" name="Price" />
        </div>

        <div class="form-group">
          <label for="Img">Product Image</label>
          <input type="file" id="img" name="img" />
        </div>

        <div class="form-group">
          <label for="Description">Product Description</label>
          <textarea type="" id="Description" name="Description" rows={5} />
        </div>
        <div class="form-group">
          <label for="Rating">Product Rating</label>
          <input type="range" id="img" name="img" min="1" max="5" />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CreateProduct;
