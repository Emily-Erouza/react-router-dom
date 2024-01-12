import React, { useState } from "react";



function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");




const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name, "Email:", email);
    const existingUsers = [
      { name: "Emily", email: "emilysbongile17@gmail.com" },
      { name: "Given", email: "Given@gmail.com" },
     
    ];
    
    const checkUserExistence = (name, email) => {
      const userExists = existingUsers.some(user => user.name === name && user.email === email);
    
      if (userExists) {
          alert("User exists!");
      } else {
          alert("User doesn't exist");
      }
    };
    
    
    const inputName = prompt("Enter your name:");
    const inputEmail = prompt("Enter your email:");
    
    checkUserExistence(inputName, inputEmail);
   
};

  return (
    <div className="signin">
     
      <h1>Signin</h1>

      <form onSubmit={handleSubmit} className="forms" id="signin-form" action="" method="post">

    
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
        />

        <button type="submit" className="btn"  onClick={handleSubmit}  >
          Signin
        
        </button>
        <button className="send">

        <a href="https://www.linkedin.com/" >
                      Dashboard</a>
        </button>
                     
           
      </form>
    </div>
  );
}

export default Signin;
