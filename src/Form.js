import React, { useState, useRef, useEffect } from "react";
import "./form.css";

const Form = () => {
  const messagesEndRef = useRef(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    scrollToBottom();
  }, [submit]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const submitForm = () => {
    let emailRegex = new RegExp('[a-z0-9]+@[a-z]+[a-z]{2,3}');
    if(name.length >0 && phone.length === 10 && emailRegex.test(email) && city.length > 0 && state.length > 0 && country.length > 0 )
    setSubmit(true);
  };

  return (
    <div className="root">
      <h1>Signup Form</h1>
      <div className="container">
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>Phone No</label>
        <input type="number" onChange={(e) => setPhone(e.target.value)} />
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>City</label>
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <label>State</label>
        <input type="text" onChange={(e) => setState(e.target.value)} />
        <label>Country</label>
        <input type="text" onChange={(e) => setCountry(e.target.value)} />
        <button onClick={submitForm}>Submit</button>
      </div>
      {submit && (
        <div className="display">
          <p>Name: {name}</p>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>Country: {country}</p>
        </div>
      )}
       <div ref={messagesEndRef} />
    </div>
  );
};
export default Form;
