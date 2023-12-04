import React from "react";


function OrderDetails() {
  return (

<div>

<div className="aboutUs">Order Details</div><br />

    <div className="receipt">

        <p className="receiptMainHeading">Order Details</p>
        <p className="receiptSubHeading">Shipping</p>
        <p className="receiptMainText">Address: &nbsp; {"56 St Kevin Square"}</p>
        <p className="receiptSubHeading">Contact</p>
        <p className="receiptMainText">Name: &nbsp; {"Stuart"}</p>
        <p className="receiptMainText">Telephone: &nbsp; {'0876133654'}</p>
        <p className="receiptSubHeading">Status</p>
        <p className="receiptMainText">Order Status:&nbsp; {"Processing"}</p>
        <p className="receiptMainText">Placed At: &nbsp; {'23 November 2023'}</p>
        <p className="receiptMainText">Delivered At: {'23 November 2023'} </p>
        <p className="receiptSubHeading">Payment</p>
        <p className="receiptMainText">Payment: &nbsp; &nbsp; {"COD"}</p>
        <p className="receiptMainText">Payment Ref: &nbsp; #{"asdasdsadsad"}</p>
        <p className="receiptMainText">Paid At: &nbsp; {'23 November 2023'}</p>
        <p className="receiptSubHeading">Amount</p>
        <p className="receiptMainText">Items Total: &nbsp €{35}</p>
        <p className="receiptMainText">Shipping Total: &nbsp €{7}</p>
        <p className="receiptMainText">Tax: &nbsp €{3.5}</p>
        <p className="receiptMainText">Total Amount: &nbsp €{35 + 7 + 3.5}</p>
        <p className="receiptMainHeading">Ordered Items</p>

        <div className="orderedItem">
          <div className="orderedItemLeft">Cheeseburger</div>
          <div className="orderedItemRight">€{8} x {1}</div>
        </div>         
        
        <div className="orderedItem">
          <div className="orderedItemLeft">Veg Cheeseburger</div>
          <div className="orderedItemRight">€{12} x {1}</div>
        </div>         
         
        <div className="orderedItem">
          <div className="orderedItemLeft">Cheeseburger + Fries</div>
          <div className="orderedItemRight">€{15} x {1}</div>
        </div>
         
        <div className="orderedItem">
          <div className="orderedItemLeft">Sub Total</div>
          <div className="orderedItemRight">€{35}</div>
        </div>

        <a href="/MyOrders">Return to My Orders</a>


          
    </div><br />

</div>

);
}

export default OrderDetails;