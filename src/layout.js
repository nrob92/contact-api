import React, { createContext, useState, useEffect } from "react";
import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import HomeEdit from "./HomeEdit";

export const ContextApp = createContext();

function Layout() {
  const [selectedContact, setSelectContact] = useState(null);
  const { path } = useLocation();
  const [listItem, setListItem] = useState([]);

  //////////////////////////////////////////////////////////////////
  const get = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://assets.breatheco.de/apis/fake/contact/agenda/nick_robinson",
      requestOptions
    )
      .then((response) => response.json())
      .then((listItem) => setListItem(listItem))
      .catch((error) => console.log("error", error));
  };
  useEffect(get, []);

  //////////////////////////////////////////////////////////////////

  const post = (fullName, email, address, phone, agenda_slug) => {
    const myHeaders = { "Content-Type": "application/json" };

    const postBody = JSON.stringify({
      full_name: fullName,
      email: email,
      agenda_slug: agenda_slug,
      address: address,
      phone: phone,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: postBody,
      redirect: "follow",
    };

    fetch("https://assets.breatheco.de/apis/fake/contact/", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .then(() => get())
      .catch((error) => console.log("error", error));
  };

  /////////////////////////////////////////////////////////////////////
  const deleteContact = (id) => {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .then(() => get())
      .catch((error) => console.log("error", error));
  };
  /////////////////////////////////////////////////////////////////////
  const put = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      full_name: "full_name",
      agenda_slug: "nick_robinson",
      email: "email",
      phone: "phone",
      address: "address",
      id: "id",
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .then(() => get())
      .catch((error) => console.log("error", error));
  };

  ///////////////////////////////////////////////////////////////////

  const context = {
    listItem,
    post,
    deleteContact,
    put,
    selectedContact,
    setSelectContact,
  };

  ///////////////////////////////////////////////////////////////////
  return (
    <ContextApp.Provider value={context}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact/*" element={<Contact />}>
          <Route path={":id"} element={<HomeEdit />} />
        </Route>
      </Routes>
    </ContextApp.Provider>
  );
}

export default Layout;
