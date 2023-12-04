import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Card(props) {

  function addToCart() {
    const url = "/Cart?id=" + props.id;
    window.location.href = url;
  }
//console.log("id is " + {props.id});

  return (
    <div className="menuCard">
      <div className="menuTop"></div>
          <img src={props.img} alt="Burger" height="100px" /><br />
          €{props.price}<br />
          {props.desc}<br ></br>
          <span className="purpleText">Buy Now</span><button onClick={addToCart} className="cartButton"><AddShoppingCartIcon /></button>
    </div>
  );
}

export default Card;