import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextApp } from "./layout";
import "./contact.css";

const Contact = (props) => {
  const { listItem, deleteContact } = useContext(ContextApp);

  let navigate = useNavigate();

  return (
    <div className="contact-width">
      <div className="contact-btn-container">
        <Link className="contact-btn" to="/">
          Add new contact
        </Link>
      </div>

      {listItem.map((item, index) => {
        const Update = (id) => {
          navigate(`${id}`);
        };
        return (
          <div key={index} className="contact-container">
            <div className="contact-img">
              <img
                src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
                alt="dog"
              />
            </div>

            <div className="contact-info">
              <h3>{item.full_name}</h3>
              <p>{item.address}</p>
              <p>{item.phone}</p>
              <p>{item.email}</p>
            </div>
            <div className="contact-btns">
              <button
                onClick={() => {
                  Update(item.id);
                }}
              >
                edit
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  deleteContact(item.id);
                }}
              >
                trash
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
