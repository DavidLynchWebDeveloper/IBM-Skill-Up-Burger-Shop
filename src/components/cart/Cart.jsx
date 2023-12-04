import React, { useEffect, useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import burgers from "../home/burgers.js";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const queryParameters = new URLSearchParams(window.location.search);
const id = queryParameters.get("id");
console.log("id is " + id + " type " + typeof(id));

const allowed = ["1","2","3"];
let initArray = [0,0,0];

if (allowed.includes(id)) {
    const ind = parseInt(id) - 1;
    initArray[ind] = 1;
}

function Cart() {

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
    if (items) {
      if (items.reg === "true") {
        setReg(true);
        setContact(items);
      }
    }
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('logged'));
    if (items) {
      if (items.log === "true") {
        setLog(true);
        setlogDetails(items);
      }
    }
  }, []);

  const [count1, setCount1] = React.useState(initArray[0]);
  const [count2, setCount2] = React.useState(initArray[1]);
  const [count3, setCount3] = React.useState(initArray[2]);

  function increase1() {
    setCount1(count1 + 1);
  }

  function decrease1() {
    if (count1 !== 0) {
      setCount1(count1 - 1);
    }
  }

  function increase2() {
    setCount2(count2 + 1);
  }

  function decrease2() {
    if (count2 !== 0) {
      setCount2(count2 - 1);
    }
  }

  function increase3() {
    setCount3(count3 + 1);
  }

  function decrease3() {
    if (count3 !== 0) {
      setCount3(count3 - 1);
    }
  } 
  
    var subTotal = (count1 * burgers[0].price) + (count2 * burgers[1].price) + (count3 * burgers[2].price);
    var tax = subTotal * 0.2;
    tax = Number(tax.toFixed(2));
    var shipping = subTotal * 0.1;
    shipping =Number(shipping.toFixed(2));
    var total = subTotal + tax + shipping;
    total =Number(total.toFixed(2));
    return ( 

<div>
    <div className="aboutUs">Shopping Cart</div>

        <div className="cartItem">  
            <div className="cartText">Cheese Burger</div>
            <div className="cartImg"><img src={burger1} alt="Cheese Burger" height="50px" /></div>
            <div className="cartRight">
                <button onClick={decrease1} className="counterButton"><RemoveCircleOutlineIcon /></button>
                <h6>{count1}</h6>
                <button onClick={increase1} className="counterButton"><AddCircleOutlineIcon /></button>
            </div>
        </div>
    
        <br />

        <div className="cartItem">  
            <div className="cartText">Veg Cheese Burger</div>
            <div className="cartImg"><img src={burger2} alt="Veg Cheese Burger" height="50px" /></div>
            <div className="cartRight">
                <button onClick={decrease2} className="counterButton"><RemoveCircleOutlineIcon /></button>
                <h6>{count2}</h6>
                <button onClick={increase2} className="counterButton"><AddCircleOutlineIcon /></button>
            </div>
        </div>
    
        <br />
        
        <div className="cartItem">  
            <div className="cartText">Cheese Burger & French Fries</div>
            <div className="cartImg"><img src={burger3} alt="Cheese Burger" height="50px" /></div>
            <div className="cartRight">
                <button onClick={decrease3} className="counterButton"><RemoveCircleOutlineIcon /></button>
                <h6>{count3}</h6>
                <button onClick={increase3} className="counterButton"><AddCircleOutlineIcon /></button>
            </div>
        </div>
    
    <br />
    
    <div className="orderSummary">  

            <div className="cartText">
                Sub Total<br />
                Tax<br />
                Shipping Charges<br />
                Total<br />
            </div>

            <div className="cartRight">
                €{subTotal}<br />
                €{tax}<br />
                €{shipping}<br />
                €{total}<br />
            </div>
            
        </div>

      { isReg && isLog ?
      <form action="/Shipping"><button className="checkOut">Checkout</button></form> : null }

      { !isReg && ! isLog ? 
      <form action="/Register"><button className="checkOut">Please Register</button></form> : null }
      
      { isReg && ! isLog ? 
      <form action="/Login"><button className="checkOut">Please Login</button></form> : null }


    <br />

  </div>

    );
}

export default Cart;