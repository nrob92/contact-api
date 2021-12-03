import React, { useState, useContext } from "react";
import "./contact.css";
import { Link, useNavigate } from "react-router-dom";



import "./home.css";
import { ContextApp } from "./layout";

const Home = () => {
  const { post} = useContext(ContextApp);
  const [full_name, setfull_Name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  let navigate = useNavigate();






  return (  
    <>
      <h1 className="home-h1">Add a new contact</h1>

      <form action="" className="form-center">
        <label htmlFor="name">Full Name</label>
        <input
          className="home-input"
          type="text"
          id="name"
          value={full_name}
          onChange={(e) => {setfull_Name(e.target.value)}}
          placeholder="Full Name"
        />
        <label htmlFor="email">Email</label>
        <input
          className="home-input"
          type="text"
          id="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          placeholder="Enter Email"
        />
        <label htmlFor="phone">Phone</label>
        <input
          className="home-input"
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => {setPhone(e.target.value)}}
          placeholder="Enter Phone"
        />
        <label htmlFor="address">Address</label>
        <input
          className="home-input"
          type="text"
          id="address"
          value={address}
          onChange={(e) => {setAddress(e.target.value)}}
          placeholder="Enter Adress"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            post(full_name, email, address, phone, "nick_robinson");
            email.includes("@") && navigate("/contact");
           
          }}
          className="home-btn"
        >
          Save
        </button>

        <span className="home-link">
          <Link className="contact-link" to="/contact">
            or get back to contacts page.
          </Link>
        </span>
      </form>
    </>
  );
};

export default Home;
