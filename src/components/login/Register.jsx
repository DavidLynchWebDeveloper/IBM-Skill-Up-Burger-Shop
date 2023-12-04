import React, { useEffect, useState } from "react";

function Register() {

    const [clicked, setClicked] = useState(false);
    const [contact, setContact] = useState({
        name: "",
        email: "",
        password: "",
        reg: ""
      });

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('contact'));
        if (items) {
         setContact(items);
        }
    }, []);

      // console.log("reg is " + contact.reg);
      // if (contact.reg === "true") {
      //   window.location.href = "/Register2";
      // }

      function handleChange(event) { 
        const { name, value } = event.target;
        console.log("event is " + event.target.value);
        setContact(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });
      }

    function handleClick(event) {
       contact.reg = true;
        setClicked(true);
        event.preventDefault();
      }

    useEffect(() => {
      if (contact !== null) {
        localStorage.setItem('contact', JSON.stringify(contact));
      }
    }, [contact]);
    
    console.log("contact is " + contact.name + " " + contact.email + " " + contact.password + " " + contact.reg);

    return ( 

<div> 
    <div className="aboutUs">Register</div><br /> 

    <div className="loginFormInner">  
    
      <form onSubmit={handleClick}>
      <p class="burgerText">Sign Up</p>
       <label for="name">Name</label><br />
        <input onChange={handleChange} name="name" type="text" placeholder="What's your name?" value={contact.name} required /><br />
        <label for="email">Email</label><br />
        <input onChange={handleChange} name="email" type="text" placeholder="What's your email?" value={contact.email} required /><br />
        <label for="password">Password</label><br />
        <input onChange={handleChange} name="password" type="password" placeholder="Password?" value={contact.password} required /><br /><br />
        <label for="confirm">Comfirm</label>&nbsp;
        <input onChange={handleChange} type="checkbox" name="reg" value="true" required /><br /><br />
        {clicked ? <div>Registered - <a href="/Login">Proceed to Login</a></div> : <input type="submit" value="Submit" /> }
      </form>

    </div><br /><br />
  </div> 

    );  
}

export default Register;