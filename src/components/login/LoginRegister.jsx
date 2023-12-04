import React, { useEffect, useState } from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function LoginRegister() {

  const [contact, setContact] = useState({
    name: "",
    email: "",
    password: "",
    reg: true
  });

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('contact'));
    if (items) {
     setContact(items);
    }
  }, []);

console.log("contact " + contact.name + " " + contact.email + " " + contact.password + " " + contact.reg);

  const registered = contact.reg;

    function handleLogin() {
        if (registered === true) {
          window.location.href = "/Login";
        } else {
          window.location.href = "/Register";
        }
    }
    
    return ( 

    <div>

      <div className="aboutUs">Login/Register</div><br />

    <div className="loginFormInner">
      
      <div>
      <button onClick={handleLogin} name="login" value="login" className="logButton">Login</button>
      <button onClick={handleLogin} name="Register" value="register" className="regButton">Register</button>

      <p className="signInWith">Sign in with</p>
      <p className="signInWith2"><TwitterIcon /> &nbsp; &nbsp; <InstagramIcon />  &nbsp; &nbsp;  <YouTubeIcon />  &nbsp; &nbsp;  <FacebookIcon /></p>
      </div>
      
      
    </div>


      <br /><br />
      
</div>

    );
}

export default LoginRegister;
