import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';


function SignUp() {

const initialState = {
  Firstname: "",
  Lastname: "",
  Email: "",
  Password: "",
  Confirmpassword: ""
}

  const [value, setValue] = useState(initialState);

  

  const handleChange = (e) => {
    const { id, value } = e.target
    setValue((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    setValue(initialState)
    e.preventDefault();
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h3>Create Account</h3>
       
      <input
        type="text"
        id="Firstname"
        placeholder="First name"
        className="form-control"
        value={value.Firstname}
        onChange={handleChange}
      />
      <br />
       
      <input
        type="text"
        id="Lastname"
        placeholder="Last name"
        className="form-control"
        value={value.Lastname}
        onChange={handleChange}
      />
      <br />
     
      <input
        type="email"
        id="Email"
        placeholder="Email"
        className="form-control"
        value={value.Email}
        onChange={handleChange}
      />{" "}
      <br />
     
      <input
        type="password"
        id="Password"
        placeholder="Password"
        className="form-control"
        value={value.Password}
        onChange={handleChange}
      />{" "}
      <br />
      
      <input
        type="password"
        id="Confirmpassword"
        placeholder="Confirm password"
        className="form-control"
        value={value.Confirmpassword}
        onChange={handleChange}
      />{" "}
      <br />
      <input type="submit" id="submit" value="Submit" className="btn btn-primary" />
    </form>
    </div>
  );
}

export default SignUp;
