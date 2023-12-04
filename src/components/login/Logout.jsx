import React, { useEffect, useState } from "react";

function Logout() {

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

//   const [isLoggedIn, setisLoggedIn] = useState(false);
//   const [reg, setReg] = useState(false);
  
//       function handleChange(event) {
//         const { name, value } = event.target;
//         setlogDetails(prevValue => {
//           return {
//             ...prevValue,
//             [name]: value
//           };
//         });
//       }

//     function handleClick(event) {
//       if ((contact.email === logDetails.email) && (contact.password === logDetails.password)) {
//         setisLoggedIn(true);
//       }
//       event.preventDefault();
//       }

    //   useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('contact'));
    //     if (items) {
    //       if (items.reg !== "") {
    //       setContact(items);
    //       setReg(true);
    //       }
    //     }
    //   }, []);

    //   console.log("reg is -- " + reg);

      // if (reg === false) {
      //   window.location.href = "/Register";
      // }

      useEffect(() => {
        localStorage.setItem('contact', JSON.stringify(contact));
      }, [contact]);

      useEffect(() => {
        localStorage.setItem('logged', JSON.stringify(logDetails));
      }, [logDetails]);

    return ( 

<div>
    <div className="aboutUs">Logout</div><br />

    <div className="loginFormInner">  

      <h1>You are Logged Out</h1>

    </div>
    
    <br /><br />
    
  </div>

    );
}

export default Logout;