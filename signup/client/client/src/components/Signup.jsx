import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    surname: "",
    email: "",
    number: ""
  });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/userDetails');
      console.log(response.data);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("name:", userDetails.name, "surname:", userDetails.surname, "email:", userDetails.email, "number:", userDetails.number);

    try {
      await axios.post('http://localhost:5000/userDetails', userDetails);
      console.log('User successfully created!');
      getUser();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className='signup'>

      <h1>Signup</h1>
      <p>Please fill in your information..</p>
      <div className="form">
        <form>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="form-control"
            onChange={(e) => handleChange(e)}
            id="name"
            value={userDetails.name}
          />
          <br />

          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            name="surname"
            placeholder="Enter your surname"
            className="form-control"
            onChange={(e) => handleChange(e)}
            id="surname"
            value={userDetails.surname}
          />
          <br />

          <label htmlFor="email">Email </label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="form-control"
            id="email"
            value={userDetails.email}
            onChange={(e) => handleChange(e)}
          />
          <br />

          <label htmlFor="phone number">Phone number</label>
          <input
            type="number"
            name="number"
            placeholder="Enter contacts"
            className="form-control"
            id="number"
            value={userDetails.number}
            onChange={(e) => handleChange(e)}
          />
          <br />

          <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
            Signup
          </button>
          <br />
         
        </form>
      </div>
    </div>
  );
};

export default Signup;

