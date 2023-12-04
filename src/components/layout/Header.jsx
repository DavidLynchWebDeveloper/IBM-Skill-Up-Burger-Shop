import React, { useEffect, useState } from "react";
import CottageIcon from '@mui/icons-material/Cottage';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../../assets/logo.png";


function Heading() {

    const [hideLog, setHideLog] = useState(false);
    const [hideReg, setHideReg] = useState(false);
    const [isReg, setReg] = useState(false);
    const [isLog, setLog] = useState(false);

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

      useEffect(() => {
        const items = JSON.parse(localStorage.getItem('contact'));
        console.log("items are " + items);
        if (items) {
          if (items.reg !== "") {
            setReg(true);
            setContact(items);
            setHideReg(true);
          }
        }
      }, []);

      useEffect(() => {
        const items = JSON.parse(localStorage.getItem('logged'));
        if (items) {
          if (items.log === "true") {
            setLog(true);
            setlogDetails(items);
            setHideLog(true);
          }
        }
      }, []);

       console.log("hide log " + hideLog);

    return (
        <header>
        
        <img src={logo} alt="Burger Logo" />
        
        <a href="/"><CottageIcon /></a> &nbsp; &nbsp;
        <a href="/Contact"><AlternateEmailIcon /></a> &nbsp; &nbsp;
        <a href="/About"><PsychologyAltIcon /></a> &nbsp; &nbsp; 
        <a href="/Cart"><ShoppingCartIcon /></a>  &nbsp; &nbsp; 

        <div className="menuWrapper">
            <div tabindex="0" className="menu">
             <div className="menu-dropdown">
                <a href="/Cart">Shop</a>
                <a href="/MyOrders">My Orders</a>
                { hideLog ? null : <div><a href="/Login">Login</a></div> }
                { hideReg ? null : <div><a href="/Register">Register</a></div> }
                <a href="/Logout">Logout</a>
                
             </div>
            </div>
        </div>


        </header>

    );
  }
  
  export default Heading;
  
  