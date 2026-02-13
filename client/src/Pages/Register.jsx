import React, { useState } from "react";
import "../assets/css/form.css";
import { Link, useNavigate } from "react-router-dom";
import validation from "../Components/Validation";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [serverErrors, setServerErrors] = useState([]);
  const navigate = useNavigate();
  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validation(values);
    setError(errs);
    if (errs.name === "" && errs.email === "" && errs.password === "") {
      axios
        .post("http://127.0.0.1:3000/contactmsyt/register", values)
        .then((res) => {
          if (res.data.success) {
            toast.success("account created successfully", {
              position: "top-right",
              autoClose: 5000,
            });
            navigate("/login");
          }
        })
        .catch((err) => {
          if (err.response && err.response.data && err.response.data.errors) {
            setServerErrors(err.response.data.errors);
          } else {
            console.log(err);
            toast.error("Connection failed. Please check if the server is running on port 3000.", {
              position: "top-right",
              autoClose: 5000,
            });
          }
        });
    }
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter name"
            className="form-control"
            name="name"
            onChange={handleInput}
          />
          {error.name && <span className="error">{error.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            name="email"
            autoComplete="off"
            onChange={handleInput}
          />
          {error.email && <span className="error">{error.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            placeholder="*******"
            className="form-control"
            name="password"
            onChange={handleInput}
          />
          {error.password && <span className="error">{error.password}</span>}
        </div>
        {serverErrors.length > 0 &&
          serverErrors.map((error, index) => (
            <p className="error" key={index}>
              {error.msg}
            </p>
          ))}
        <button className="form-btn">Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
