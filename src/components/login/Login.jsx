import React, { useEffect, useState } from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function Login() {

  const [contact, setContact] = useState({
    name: "",
    email: "",
    password: "",
    reg: ""
  });

  const [logDetails, setlogDetails] = useState({
    email: "",
    password: "",
    log: ""
  });

  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [reg, setReg] = useState(false);
  
      function handleChange(event) {
        const { name, value } = event.target;
        setlogDetails(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });
      }

    function handleClick(event) {
      if ((contact.email === logDetails.email) && (contact.password === logDetails.password)) {
        setisLoggedIn(true);
      }
      event.preventDefault();
      }

      useEffect(() => {
        const items = JSON.parse(localStorage.getItem('contact'));
        if (items) {
          if (items.reg !== "") {
          setContact(items);
          setReg(true);
          }
        }
      }, []);

      console.log("reg is -- " + reg);

      // if (reg === false) {
      //   window.location.href = "/Register";
      // }

      useEffect(() => {
        localStorage.setItem('logged', JSON.stringify(logDetails));
      }, [logDetails]);

    return ( 

<div>
    <div className="aboutUs">Login</div><br />

    <div className="loginFormInner">  

      <form onSubmit={handleClick}>
      <p class="burgerText">Login</p><br />
        <label for="email">Email</label><br />
        <input onChange={handleChange} name="email" type="text" placeholder="What's your email?" value={logDetails.email} required /><br />
        <label for="password">Password</label><br />
        <input onChange={handleChange} name="password" type="password" placeholder="Password?" value={logDetails.password} required /><br /><br />
        <label for="confirm">Comfirm</label>&nbsp;
        <input onChange={handleChange} type="checkbox" name="log" value="true" required /><br /><br />
        {isLoggedIn ? <div>Logged In - <a href="/">Proceed to Our Menu</a></div> : <input type="submit" value="Submit" /> }
      </form><br /><br />
      <a href="/" className="forgotPassword">Forgot Password</a>
      {isLoggedIn ? null : <div className="popUp3">Please enter correct email and password</div>}
      <br /><br />Sign in with: &nbsp; &nbsp; <TwitterIcon /> &nbsp; &nbsp; <InstagramIcon />  &nbsp; &nbsp;  <YouTubeIcon />  &nbsp; &nbsp;  <FacebookIcon />
    </div>
    
    <br /><br />
    
  </div>

    );
}

export default Login;
