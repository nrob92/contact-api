import React, { useState, useContext,useEffect } from "react";
import "./contact.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./home.css";
import { ContextApp } from "./layout";

  




const HomeEdit = () => {
   
    const { post,listItem, put} = useContext(ContextApp);
    let { id } = useParams();
    
  let filteredId = listItem.filter((contact) => contact.id === id)[0];
  console.log( "edit" ,filteredId)
  const [full_name, setfull_Name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

useEffect(() => { 
  if(filteredId){
      setfull_Name(filteredId.full_name);
      setEmail(filteredId.email);
      setAddress(filteredId.address);
      setPhone(filteredId.phone);
  }
}, [filteredId])

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
          onChange={(e) => {
            setfull_Name(e.target.value);
          }}
          placeholder="Full Name"
        />
        <label htmlFor="email">Email</label>
        <input
          className="home-input"
          type="text"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter Email"
        />
        <label htmlFor="phone">Phone</label>
        <input
          className="home-input"
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          placeholder="Enter Phone"
        />
        <label htmlFor="address">Address</label>
        <input
          className="home-input"
          type="text"
          id="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          placeholder="Enter Adress"
        />

        <button onClick={(e) => {
                  e.preventDefault();
                  put(id,full_name, email, address, phone)
                  email.includes("@") && navigate("/contact");
                }} className="home-btn update">Save & Update</button>

        <span className="home-link">
          <Link className="contact-link" to="/contact">
            or get back to contacts page.
          </Link>
        </span>
      </form>
    </>
  )
};

export default HomeEdit;
