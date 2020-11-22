import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function SignIn() {
  const initialState = {
    Email: "",
    Password: "",
  };

  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    alert("A name was submitted: " + value);
    
    setValue(initialState);
    e.preventDefault();
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3 className="text-justify">Sign In</h3>
        <input
          type="email"
          id="Email"
          className="form-control"
          placeholder="Email"
          value={value.Email}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="password"
          id="Password"
          className="form-control"
          placeholder="Password"
          value={value.Password}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="submit"
          id="submit"
          value="Submit"
          className="btn btn-primary"
        />
      </form>
    </div>
  );
}

export default SignIn;
