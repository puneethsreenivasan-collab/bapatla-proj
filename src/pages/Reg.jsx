import React, { useState } from "react";
import "../styles/reg.css";
import axios from "axios";
const Reg = () => {
  let Uesr_url = "http://localhost:5000/users";

  let [FullName, SetFullName] = useState("");
  let [Email, SetEmail] = useState("");
  let [Password, SetPassword] = useState("");
  let [ConfirmPassword, SetConfirmPassword] = useState("");
  let [PhoneNumber, SetPhoneNumber] = useState("");
  let [Address, SetAddress] = useState("");
  let [DateOfBirth, SetDateOfBirth] = useState("");
  let [Gender, SetGender] = useState("");
  let [Country, SetCountry] = useState("");

  let User = {
    FullName,
    Email,
    Password,
    PhoneNumber,
    Address,
    DateOfBirth,
    Gender,
    Country,
  };

  const Reg_user = (x) => {
    x.preventDefault();

    // validation
    // if email already exist
    axios
      .post(Uesr_url, User)
      .then((res) => {
        alert("User Register Successfully");
      })
      .catch((err) => {
        alert("User Register Failed Please Try Again");
      });
  };

  return (
    <div className="reg-container">
      <h2>Registration Form</h2>

      <form action="" className="reg-from" onSubmit={Reg_user}>
        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => SetFullName(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => SetEmail(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => SetPassword(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={(e) => SetConfirmPassword(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={(e) => SetPhoneNumber(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            onChange={(e) => SetDateOfBirth(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label>Gender</label>
          <div class="gender">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => SetGender(e.target.value)}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => SetGender(e.target.value)}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                onChange={(e) => SetGender(e.target.value)}
              />{" "}
              Other
            </label>
          </div>
        </div>

        <div class="form-group">
          <label for="Country">Country</label>
          <select
            id="Country"
            name="Country"
            onChange={(e) => SetCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
          </select>
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <textarea
            id="address"
            name="address"
            rows="3"
            onChange={(e) => SetAddress(e.target.value)}
          ></textarea>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Reg;
